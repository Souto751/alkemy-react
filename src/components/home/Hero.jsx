import React from 'react';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';

import '../../style/hero.css';

export default function Hero(props) {
    return (
        <div className="heroes-div">
        {
            props.teamMembers.map((x, i = 0, j = 1) => {
                return <div className={`hero-div ${"hero-div" + j} ${x.alignment === "good" ? "good-character" : "evil-character"}`} key={i}>
                    <div><img src={x.img} alt="hero-img" className="hero-img"/></div>
                    <p className="hero-name">{x.name}</p>
                    <div className="hero-ps">
                        <div className="hero-power-stat">
                            <img src={Intelligence} alt="power-stat" className="hero-ps-logo"/>
                            <p>{x.stats[0].value}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p>{x.stats[1].value}</p>
                            <img src={Strength} alt="power-stat" className="hero-ps-logo"/>
                        </div>
                        <div className="hero-power-stat">
                            <img src={Speed} alt="power-stat" className="hero-ps-logo"/>
                            <p>{x.stats[2].value}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p>{x.stats[3].value}</p>
                            <img src={Durability} alt="power-stat" className="hero-ps-logo"/>
                        </div>
                        <div className="hero-power-stat">
                            <img src={Power} alt="power-stat" className="hero-ps-logo"/>
                            <p>{x.stats[4].value}</p>
                        </div>
                        <div className="hero-power-stat">
                            <p>{x.stats[5].value}</p>
                            <img src={Combat} alt="power-stat" className="hero-ps-logo"/>
                        </div>
                    </div>
                </div>
            })
        }
        </div>
    )
}
