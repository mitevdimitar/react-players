import React from 'react';
import handleData from '../../Services/handleData';
import ReactLoading from 'react-loading';
import NameImput from './NameInput';
import DescriptionImput from './DescriptionInput';
import ImageImput from './ImageInput';
import TeamSelect from './TeamSelect';
import Notification from '../../Notification/Notification';
import {UserContext} from '../../ContextWrapper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddPlayer.css'

class AddPlayer extends React.Component {

    static contextType = UserContext;

    state = {
        creator: this.context.user.uid,
        name: "",
        description: "",
        imageURL: "",
        team: "",
        _id: "",
        getId: "",
        likes: 0,
        loading: false,
        errorMessage: ""
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }

    handleImageChange = (e) => {
        this.setState({imageURL: e.target.value})
    }

    handleTeamChange = (e) => {
        this.setState({team: e.target.value})
    }
    
   
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.name === "" || this.state.description === "" || 
        this.state.imageURL === "" || this.state.team === "") {
            this.setState({errorMessage: "All fields are required!"})
        } else {
            let player = this.state;
            this.setState({errorMessage: ""})
            this.setState({loading:true})
            handleData.postPlayer(player)
                .then((data) => {
                    this.setState({
                        loading: false,
                        name: "",                                
                        description: "",
                        imageURL: "",
                        team: ""
                    });
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

    componentDidMount() {
        let generatedId = Math.floor(Math.random() * 100000000000000);
        this.setState({_id: generatedId});
    }

    render() {
        return (
            <React.Fragment>
                <section className="create">
                <form onSubmit={this.handleSubmit} action="#/add" method="post">
                    <fieldset>
                        <h4>Add PL Player</h4>
                        <TextField 
                            required 
                            id="name"
                            label="Name" 
                            value={this.state.name} 
                            onChange={this.handleNameChange} 
                        />
                        <TextField
                            required
                            id="standard-multiline-static"
                            label="Description"
                            multiline
                            rows={5}
                            value={this.state.description} 
                            onChange={this.handleDescriptionChange} 
                            /* variant="outlined" */
                        />
                        {/* <DescriptionImput handleDescriptionChange={this.handleDescriptionChange} description={this.state.description}/> */}
                        <TextField 
                            required 
                            id="image"
                            label="Image URL" 
                            value={this.state.imageURL} 
                            onChange={this.handleImageChange} 
                        />
                        {/* <ImageImput handleImageChange={this.handleImageChange} imageURL={this.state.imageURL}/> */}
                        <FormControl>
                            <InputLabel htmlFor="team-native-simple">Team</InputLabel>
                            <Select
                                native
                                required
                                value={this.state.team}
                                onChange={this.handleTeamChange}
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
                        {/* <TeamSelect handleTeamChange={this.handleTeamChange} team={this.state.team}/> */}
                        <input className="button submit" type="submit" value="Add Player" />
                        <Notification message="Succesfully added player"/>
                        {this.state.errorMessage ? <p className="error-message">{this.state.errorMessage}</p> : <div></div>}
                        {this.state.loading ? <span><ReactLoading type={"bars"} color={"#000000"} height={45} width={45} /></span> : <span></span>}
                    </fieldset>
                </form>
            </section>
            </React.Fragment>
        )
    }
}

export default AddPlayer