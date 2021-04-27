import React from 'react';
import {Link} from 'react-router-dom';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';

export default function HeroInfo(props) {
    return (
        <div className="character-profile-info-div">
            <Link to="/"><button className="go-home-btn">←Go Back</button></Link>
            <h1 className="character-profile-name">{props.props.name}</h1>
            <div className="character-info">
                <h3>Full Name: </h3>
                <p>{props.props.fullname}</p>
            </div>
            <div className="character-info">
                <h3>Work Place:</h3>
                <p>{props.props.work}</p>
            </div>
            <div className="character-info">
                <h3>Height:</h3>
                <p>{props.props.height}</p>
            </div>
            <div className="character-info">
                <h3>Weight:</h3>
                <p>{props.props.weight}</p>
            </div>
            <div className="character-info">
                <h3>Eyes Color:</h3>
                <p>{props.props.eyes}</p>
            </div>
            <div className="character-info">
                <h3>Hair Color:</h3>
                <p>{props.props.hair}</p>
            </div>
            <div className="character-info">
                <h3>Alignment:</h3>
                <p>{props.props.alignment}</p>
            </div>
            <div className="character-info-stats">
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-in"><img src={Intelligence} alt=""/></div>
                    <p>{props.props.stats[0].value}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-st"><img src={Strength} alt=""/></div>
                    <p>{props.props.stats[1].value}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-sp"><img src={Speed} alt=""/></div>
                    <p>{props.props.stats[2].value}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-du"><img src={Durability} alt=""/></div>
                    <p>{props.props.stats[3].value}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-po"><img src={Power} alt=""/></div>
                    <p>{props.props.stats[4].value}</p>
                </div>
                <div className="character-profile-ps-div">
                    <div className="ps-profile-div ps-prof-co"><img src={Combat} alt=""/></div>
                    <p>{props.props.stats[5].value}</p>
                </div>
            </div>
        </div>
    )
}
