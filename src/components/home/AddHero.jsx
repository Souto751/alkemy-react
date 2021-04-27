import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../style/addHero.css';

import databaseImg from '../../images/database.png';
import heroInfo from '../../images/info.png';
import addButton from '../../images/add.png';

export default function AddHero(props) {
    const [heroName, setHeroName] = useState("");

    return (
        <div className="addHero">
            <div className="add-hero-input-div">
                <h2 className="add-hero-title">Add a Team Member</h2>
                <input type="text" className="add-hero-input" placeholder="Insert the name of a character..." onChange={event => setHeroName(event.target.value)} />
                <div className="character-add-buttons">
                    <button className="add-button" onClick={() => props.addCharacter(heroName)}><img src={addButton} alt="info" className="goto-character-profile-img" /></button>
                    <Link className="goto-character-profile" to={"/"}><img src={heroInfo} alt="info" className="goto-character-profile-img" /></Link>
                </div>
            </div>
        </div>
    )
}
