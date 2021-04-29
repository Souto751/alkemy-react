import React from 'react';
import {Link} from 'react-router-dom';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';

export default function HeroInfo(props) {

    const hero = JSON.parse(localStorage.getItem('hero'));
    console.log(hero)

    return (
        <div className="character-profile-info-div">
            <Link to="/"><button className="go-home-btn">←Go Back</button></Link>
            <h1 className="character-profile-name">{hero.name}</h1>
            <div className="character-info">
                <h3>Full Name: </h3>
                <p>{hero.biography["full-name"]}</p>
            </div>
            <div className="character-info">
                <h3>Work Place:</h3>
                <p>{hero.work.base}</p>
            </div>
            <div className="character-info">
                <h3>Height:</h3>
                <p>{hero.appearance.height[1]}</p>
            </div>
            <div className="character-info">
                <h3>Weight:</h3>
                <p>{hero.appearance.weight[1]}</p>
            </div>
            <div className="character-info">
                <h3>Eyes Color:</h3>
                <p>{hero.appearance["eye-color"]}</p>
            </div>
            <div className="character-info">
                <h3>Hair Color:</h3>
                <p>{hero.appearance["hair-color"]}</p>
            </div>
            <div className="character-info">
                <h3>Alignment:</h3>
                <p>{hero.biography.alignment}</p>
            </div>
            <div className="character-info-stats">
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-in"><img src={Intelligence} alt=""/></div>
                    <p>{hero.powerstats.intelligence}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-st"><img src={Strength} alt=""/></div>
                    <p>{hero.powerstats.strength}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-sp"><img src={Speed} alt=""/></div>
                    <p>{hero.powerstats.speed}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-du"><img src={Durability} alt=""/></div>
                    <p>{hero.powerstats.durability}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-po"><img src={Power} alt=""/></div>
                    <p>{hero.powerstats.power}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-co"><img src={Combat} alt=""/></div>
                    <p>{hero.powerstats.combat}</p>
                </div>
            </div>
        </div>
    )
}
