import React from 'react';
import handleData from '../../Services/handleData';
import ReactLoading from 'react-loading';
import NameImput from './NameInput';
import DescriptionImput from './DescriptionInput';
import ImageImput from './ImageInput';
import TeamSelect from './TeamSelect';
import './AddPlayer.css'

class AddPlayer extends React.Component {

    state = {
        creator: this.props.user.uid,
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
                        <legend>Add PL Player</legend>
                        <NameImput handleNameChange={this.handleNameChange} name={this.state.name}/>
                        <DescriptionImput handleDescriptionChange={this.handleDescriptionChange} description={this.state.description}/>
                        <ImageImput handleImageChange={this.handleImageChange} imageURL={this.state.imageURL}/>
                        <TeamSelect handleTeamChange={this.handleTeamChange} team={this.state.team}/>
                        <input className="button submit" type="submit" value="Add Player" />
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