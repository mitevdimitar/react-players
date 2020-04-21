import React from 'react';

function TeamSelect(props) {
    return (
        <p className="field">
                            <label htmlFor="team">Team</label>
                            <span className="input">
                                <select onChange={props.handleTeamChange} value={props.team} type="text" name="team" required>
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
    )
}

export default TeamSelect