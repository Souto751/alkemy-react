import React from 'react';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';

import '../../style/powerStats.css';

export default function TeamPowerstats() {
    return (
        <div className="power-stats">
            <div className="p1">
                <div className="best-stat-div">
                    <img src={Power} alt="power-stat" className="home-power-stat-img" />
                </div>
            </div>

            <div className="power-cell">
                <div className="home-power-stat-div bg-int">
                    <img src={Intelligence} alt="intelligece-stat" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">123</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">121</p>
                <div className="home-power-stat-div bg-str">
                    <img src={Strength} alt="strength-stat" className="home-power-stat-img" />
                </div>
            </div>
            <div className="power-cell">
                <div className="home-power-stat-div bg-spd">
                    <img src={Speed} alt="speed" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">111</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">85</p>
                <div className="home-power-stat-div bg-dur">
                    <img src={Durability} alt="durability-stat" className="home-power-stat-img" />
                </div>
            </div>
            <div className="power-cell">
                <div className="home-power-stat-div bg-pow">
                    <img src={Power} alt="power-stat" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">212</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">123</p>
                <div className="home-power-stat-div bg-comb">
                    <img src={Combat} alt="combat-stat" className="home-power-stat-img" />
                </div>
            </div>
        </div>
    )
}
