import React from 'react';
import {Link} from 'react-router-dom';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';
import heroInfo from '../../images/info.png';
import addButton from '../../images/add.png';

import '../../style/hero.css';

export default function Hero(props) {
    if(props.heroesList){
        return (
            <div className="heroes-div">
            {
                props.heroesList.map((x, i = 0, j = 1) => {
                    return <div className={`hero-div ${x.alignment}`} key={i}>
                        <div><img src={x.img} alt="hero-img" className="hero-img"/></div>
                        <p className={`hero-name ${x.alignment === "good" ? "good-ch" : "evil-ch"}`}>{x.name}</p>
                        <div className="hero-ps">
                            <div className="hero-power-stat">
                                <div className={`hero-ps-logo-div hero-ps-logo1`}><img src={Intelligence} alt="power-stat" className="hero-ps-logo"/></div>
                                <p className={`hero-ps-value hero-ps1`}>{x.stats[0].value}</p>
                            </div>
                            <div className="hero-power-stat">
                                <p className={`hero-ps-value hero-ps2`}>{x.stats[1].value}</p>
                                <div className={`hero-ps-logo-div hero-ps-logo2`}><img src={Strength} alt="power-stat" className="hero-ps-logo"/></div>
                            </div>
                            <div className="hero-power-stat">
                                <div className={`hero-ps-logo-div hero-ps-logo3`}><img src={Speed} alt="power-stat" className="hero-ps-logo"/></div>
                                <p className={`hero-ps-value hero-ps3`}>{x.stats[2].value}</p>
                            </div>
                            <div className="hero-power-stat">
                                <p className={`hero-ps-value hero-ps4`}>{x.stats[3].value}</p>
                                <div className={`hero-ps-logo-div hero-ps-logo4`}><img src={Durability} alt="power-stat" className="hero-ps-logo"/></div>
                            </div>
                            <div className="hero-power-stat">
                                <div className={`hero-ps-logo-div hero-ps-logo5`}><img src={Power} alt="power-stat" className="hero-ps-logo"/></div>
                                <p className={`hero-ps-value hero-ps5`}>{x.stats[4].value}</p>
                            </div>
                            <div className="hero-power-stat">
                                <p className={`hero-ps-value hero-ps6`}>{x.stats[5].value}</p>
                                <div className={`hero-ps-logo-div hero-ps-logo6`}><img src={Combat} alt="power-stat" className="hero-ps-logo"/></div>
                            </div>
                        </div>
                        <div className="hero-buttons">
                            <Link to={{pathname: x.link, state:{selectedhero: x}}} heroInfo={x.img}><button className="hero-info-btn">i</button></Link>
                            <button className="hero-delete-btn" onClick={() => props.deleteHero(i)}>x</button>
                        </div>
                    </div>
                })
            }
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}
