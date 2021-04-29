import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/addHero.css';

import dataBase from '../../images/database.png'

export default function AddHero(props) {

    return (
        <div className="addHero">
            <div className="add-hero-input-div">
                <h2 className="add-hero-title">See List of Heroes</h2>
                <div className="character-add-buttons">
                    <Link to={"/alkemy-react/characters-list"}><img src={dataBase} alt="database"/></Link>
                </div>
            </div>
        </div>
    )
}
