/*eslint-disable no-undef*/
import React, { useState, useEffect, useContext } from 'react';
import handleData from '../../Services/handleData';
import ReactLoading from 'react-loading';
import Notification from '../../Notification/Notification';
import {UserContext} from '../../ContextWrapper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "../../Components/Button";
import './AddPlayer.css';
  
function AddPlayer() {
    const auth = useContext(UserContext);
    const creator = auth.user.uid;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [team, setTeam] = useState("");
    const [_id, setId] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const myWidget = cloudinary.createUploadWidget({
        cloudName: 'detm4x3jn', 
        uploadPreset: 'players'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            setImageURL(result.info.secure_url);
          }
        }
    )

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleImageChange = (e) => {
        setImageURL(e.target.value);
    }

    const handleTeamChange = (e) => {
        setTeam(e.target.value);
    }
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (imageURL === "") {
           setErrorMessage("Player image is required!");
        } else {
            let player = {
                creator,
                name,
                description,
                imageURL,
                team,
                _id,
                getId: "",
                likes: 0
            };
            setErrorMessage("Player image is required!");
            setLoading(true);
            handleData.postPlayer(player)
                .then((data) => {
                    setLoading(false);
                    setName("");
                    setDescription("");
                    setImageURL("");
                    setTeam("");
                    player.getId = data.name;
                    handleData.putPlayer(data.name, player)
                        .then(
                            () => {
                                let successDiv = document.getElementById('success');
                                successDiv.style.display = "block";
                                setTimeout(() => { 
                                    successDiv.style.display = "none";
                                 }, 2000);
                            }
                        )
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
    }

    useEffect(()=>{
        let generatedId = Math.floor(Math.random() * 100000000000000);
        setId(generatedId);
    }, []);

    return (
        <React.Fragment>
            <section className="create">
            <form onSubmit={handleSubmit} action="#/add" method="post">
                <fieldset>
                    <h4>Add PL Player</h4>
                    <TextField 
                        required 
                        id="name"
                        label="Name" 
                        value={name} 
                        onChange={handleNameChange} 
                    />
                    <TextField
                        required
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={5}
                        value={description} 
                        onChange={handleDescriptionChange} 
                        /* variant="outlined" */
                    />
                    {/* <TextField 
                        required 
                        id="image"
                        label="Image URL" 
                        value={imageURL} 
                        onChange={handleImageChange} 
                    /> */}
                    <FormControl>
                        <InputLabel htmlFor="team-native-simple">Team</InputLabel>
                        <Select
                            native
                            required
                            value={team}
                            onChange={handleTeamChange}
                            inputProps={{
                                name: 'team',
                                id: 'team-native-simple',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option>Man Utd</option>
                            <option>Liverpool</option>
                            <option>Man City</option>
                            <option>Chelsea</option>
                            <option>Arsenal</option>
                            <option>Other</option>
                        </Select>
                    </FormControl>
                    <Button handle={() => myWidget.open()} id="upload_widget" /* className="cloudinary-button" */>Upload image</Button>
                    <input className="button submit" type="submit" value="Add Player" />
                    <Notification message="Succesfully added player"/>
                    {errorMessage ? <p className="error-message">{errorMessage}</p> : <div></div>}
                    {loading ? <span><ReactLoading type={"bars"} color={"#000000"} height={45} width={45} /></span> : <span></span>}
                </fieldset>
            </form>
        </section>
        </React.Fragment>
    )
}

export default AddPlayer