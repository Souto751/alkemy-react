import React from 'react';

import '../../style/addHero.css';

export default function AddHero() {
    return (
        <div className="addHero">
            <div className="add-hero-img-div"><img src="https://www.superherodb.com/pictures2/portraits/10/100/928.jpg" alt="loki" className="add-character-img" /></div>
            <div className="add-hero-input-div">
                <h2 className="add-hero-title">Add a Team Member</h2>
                <input type="text" className="add-hero-input" placeholder="Insert the name of a character..." />
            </div>
            <div className="add-hero-buttons-div">
                <div className="help-button-div">
                    <div></div>
                    <button>?</button>
                </div>
                <div className="character-add-buttons">
                    <button className="add-button">+</button>
                    <button className="goto-character-profile">i</button>
                </div>
            </div>
        </div>
    )
}
