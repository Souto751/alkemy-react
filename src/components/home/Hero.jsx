import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';

import '../../style/hero.css';

export default function Hero() {

    const current = JSON.parse(localStorage.getItem('team'));
    const [currentState, setCurrentState] = useState(current);

    const update = () => {
        setCurrentState(current);
    }

    const deleteTeam = (i) => {
        current.splice(i, 1);
        localStorage.setItem('team', JSON.stringify(current));
        update();
    }

    return (
        <div className="heroes-div">
        {
            currentState.map((x, i = 0) => {
                return <div className={`hero-div ${x.biography.alignment}`} key={i}>
                    <div><img src={x.image.url} alt="hero-img" className="hero-img"/></div>
                    <p className={`hero-name ${x.biography.alignment === "good" ? "good-ch" : "evil-ch"}`}>{x.name}</p>
                    <div className="hero-ps">
                        <div className="hero-power-stat">
                            <div className={`hero-ps-logo-div hero-ps-logo1`}><img src={Intelligence} alt="power-stat" className="hero-ps-logo"/></div>
                            <p className={`hero-ps-value hero-ps1`}>{x.powerstats.intelligence}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p className={`hero-ps-value hero-ps2`}>{x.powerstats.strength}</p>
                            <div className={`hero-ps-logo-div hero-ps-logo2`}><img src={Strength} alt="power-stat" className="hero-ps-logo"/></div>
                        </div>
                        <div className="hero-power-stat">
                            <div className={`hero-ps-logo-div hero-ps-logo3`}><img src={Speed} alt="power-stat" className="hero-ps-logo"/></div>
                            <p className={`hero-ps-value hero-ps3`}>{x.powerstats.speed}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p className={`hero-ps-value hero-ps4`}>{x.powerstats.durability}</p>
                            <div className={`hero-ps-logo-div hero-ps-logo4`}><img src={Durability} alt="power-stat" className="hero-ps-logo"/></div>
                        </div>
                        <div className="hero-power-stat">
                            <div className={`hero-ps-logo-div hero-ps-logo5`}><img src={Power} alt="power-stat" className="hero-ps-logo"/></div>
                            <p className={`hero-ps-value hero-ps5`}>{x.powerstats.power}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p className={`hero-ps-value hero-ps6`}>{x.powerstats.combat}</p>
                            <div className={`hero-ps-logo-div hero-ps-logo6`}><img src={Combat} alt="power-stat" className="hero-ps-logo"/></div>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <Link to={{pathname: `/alkemy-react/characters/${x.id}`, state: x}}><button className="hero-info-btn">i</button></Link>
                        <button className="hero-delete-btn" onClick={() => deleteTeam(i)}>x</button>
                    </div>
                </div>
            })
        }
        </div>
    )
}
