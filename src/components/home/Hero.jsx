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
    const [, forceUpdate] = useState(false);

    const deleteTeam = (i) => {

        localStorage.setItem('avgIntelligence', parseInt(localStorage.getItem('avgIntelligence')) - current[i].powerstats["intelligence"]);
        localStorage.setItem('avgStrength', parseInt(localStorage.getItem('avgStrength')) - current[i].powerstats["strength"]);
        localStorage.setItem('avgSpeed', parseInt(localStorage.getItem('avgSpeed')) - current[i].powerstats["speed"]);
        localStorage.setItem('avgDurability', parseInt(localStorage.getItem('avgDurability')) - current[i].powerstats["durability"]);
        localStorage.setItem('avgPower', parseInt(localStorage.getItem('avgPower')) - current[i].powerstats["power"]);
        localStorage.setItem('avgCombat', parseInt(localStorage.getItem('avgCombat')) - current[i].powerstats["combat"]);

        if(current[i].biography.alignment === "good"){
            localStorage.setItem('goodCounter', parseInt(localStorage.getItem('goodCounter')) - 1);
        }else{
            localStorage.setItem('badCounter', parseInt(localStorage.getItem('badCounter')) - 1);
        }

        current.splice(i, 1);
        localStorage.setItem('team', JSON.stringify(current));

        localStorage.setItem('avgWeight', 0);
        localStorage.setItem('avgHeight', 0);

        if(current.length > 0){
            for(let i = 0; i < current.length; i++){
                localStorage.setItem('avgWeight', parseInt(localStorage.getItem('avgWeight')) + parseInt(current[i].appearance.weight[1].split(" ")[0]));
                localStorage.setItem('avgHeight', parseInt(localStorage.getItem('avgHeight')) + parseInt(current[i].appearance.height[1].split(" ")[0]));
            }

            localStorage.setItem('avgWeight', parseInt(parseInt(localStorage.getItem('avgWeight')) / current.length));
            localStorage.setItem('avgHeight', parseInt(parseInt(localStorage.getItem('avgHeight')) / current.length));
        }

        setCurrentState(current);
        forceUpdate(n => !n);
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
                        <Link to={`/alkemy-react/characters/${x.id}`}><button className="hero-info-btn" onClick={() => localStorage.setItem("hero", JSON.stringify(x))}>i</button></Link>
                        <button className="hero-delete-btn" onClick={() => deleteTeam(i)}>x</button>
                    </div>
                </div>
            })
        }
        </div>
    )
}
