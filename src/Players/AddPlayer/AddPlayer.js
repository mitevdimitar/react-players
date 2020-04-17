import React from 'react';
import handleData from '../../Services/handleData';

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
        let player = this.state;
        e.preventDefault();
        if (this.state.name === "") {
            this.setState({errorMessage: "All fields are required!"})
        } else {
            this.setState({errorMessage: ""})
            this.setState({loading:true})
            handleData.postPlayer(player)
                .then((data) => {
                    player.getId = data.name;
                    handleData.putPlayer(data.name, player)
                        .then(() => {
                            this.setState({
                                loading: false,
                                name: "",                                
                                description: "",
                                imageURL: "",
                                team: ""
                            })
                            //window.location.href='/addplayer' 
                        })
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
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input onChange={this.handleNameChange} type="text" name="name" id="name" placeholder="Name" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea onChange={this.handleDescriptionChange} rows="4" cols="45" type="text" name="description" id="description"
                                    placeholder="Description"></textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input onChange={this.handleImageChange} type="text" name="imageURL" id="image" placeholder="Image" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="team">Team</label>
                            <span className="input">
                                <select onChange={this.handleTeamChange} type="text" name="team" required>
                                    <option>Select Team</option>
                                    <option>Man Utd</option>
                                    <option>Liverpool</option>
                                    <option>Man City</option>
                                    <option>Chelsea</option>
                                    <option>Arsenal</option>
                                    <option>Other</option>
                                </select>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <input className="button submit" type="submit" value="Add Player" />
                        {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : <div></div>}
                        {this.state.loading ? <span>Loading</span> : <span></span>}
                    </fieldset>
                </form>
            </section>
            </React.Fragment>
        )
    }
}

export default AddPlayer