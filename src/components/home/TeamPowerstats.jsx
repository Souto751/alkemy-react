import React, { useEffect, useState } from 'react';

import Strength from '../../images/strength.png';
import Combat from '../../images/combat.png';
import Power from '../../images/power.png';
import Intelligence from '../../images/intelligence.png';
import Durability from '../../images/durability.png';
import Speed from '../../images/speed.png';
import None from '../../images/none.png';

import '../../style/powerStats.css';

export default function TeamPowerstats() {
    
    let bestStatImg;
    let bestStatClass;
    const bestStat = localStorage.getItem('bestStat');

    const [intelligence, setIntelligence] = useState(localStorage.getItem('avgIntelligence'));
    const [strength, setStrength] = useState(localStorage.getItem('avgStrength'));
    const [speed, setSpeed] = useState(localStorage.getItem('avgSpeed'));
    const [durability, setDurability] = useState(localStorage.getItem('avgDurability'));
    const [power, setPower] = useState(localStorage.getItem('avgPower'));
    const [combat, setCombat] = useState(localStorage.getItem('avgCombat'));
    const [, forceUpdate] = useState(false);

    switch(bestStat){
        case 'intelligence':
            bestStatImg = Intelligence;
            bestStatClass = "best-intelligence";
            break;
        case 'strength':
            bestStatImg = Strength;
            bestStatClass = "best-strength";
            break;
        case 'speed':
            bestStatImg = Speed;
            bestStatClass = "best-speed";
            break;
        case 'durability':
            bestStatImg = Durability;
            bestStatClass = "best-durability";
            break;
        case 'power':
            bestStatImg = Power;
            bestStatClass = "best-power";
            break;
        case 'combat':
            bestStatImg = Combat;
            bestStatClass = "best-combat";
            break;
        default:
            bestStatImg = None;
            bestStatClass = "best-none";
            break;
    }

    useEffect(() => {
        setIntelligence(localStorage.getItem('avgIntelligence'));
        setStrength(localStorage.getItem('avgStrength'));
        setSpeed(localStorage.getItem('avgSpeed'));
        setDurability(localStorage.getItem('avgDurability'));
        setPower(localStorage.getItem('avgPower'));
        setCombat(localStorage.getItem('avgCombat'));
        forceUpdate(n => !n);
    }, [])

    return (
        <div className="power-stats">
            <div className="p1">
                <div className={`best-stat-div ${bestStatClass}`}>
                    <img src={bestStatImg} alt="power-stat" className="home-power-stat-img" />
                </div>
            </div>

            <div className="power-cell">
                <div className="home-power-stat-div bg-int">
                    <img src={Intelligence} alt="intelligence-stat" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">{intelligence}</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">{strength}</p>
                <div className="home-power-stat-div bg-str">
                    <img src={Strength} alt="strength-stat" className="home-power-stat-img" />
                </div>
            </div>
            <div className="power-cell">
                <div className="home-power-stat-div bg-spd">
                    <img src={Speed} alt="speed" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">{speed}</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">{durability}</p>
                <div className="home-power-stat-div bg-dur">
                    <img src={Durability} alt="durability-stat" className="home-power-stat-img" />
                </div>
            </div>
            <div className="power-cell">
                <div className="home-power-stat-div bg-pow">
                    <img src={Power} alt="power-stat" className="home-power-stat-img" />
                </div>
                <p className="home-power-stat-value">{power}</p>
            </div>
            <div className="power-cell">
                <p className="home-power-stat-value">{combat}</p>
                <div className="home-power-stat-div bg-comb">
                    <img src={Combat} alt="combat-stat" className="home-power-stat-img" />
                </div>
            </div>
        </div>
    )
}
