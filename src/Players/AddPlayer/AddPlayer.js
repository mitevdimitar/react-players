import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class AddPlayer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="create">
                <form action="#/add" method="post">
                    <fieldset>
                        <legend>Add PL Player</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" placeholder="Name" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea rows="4" cols="45" type="text" name="description" id="description"
                                    placeholder="Description"></textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageURL" id="image" placeholder="Image" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="team">Team</label>
                            <span className="input">
                                <select type="text" name="team">
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
                    </fieldset>
                </form>
            </section>
            <Footer />
            </React.Fragment>
        )
    }
}

export default AddPlayer