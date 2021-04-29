import React from 'react';

import HeroInfo from './HeroInfo';

import '../../style/heroPage.css';

export default function HeroPage(){
    const hero = JSON.parse(localStorage.getItem('hero'));
    console.log(hero)
    return (
        <div className="hero-page">
            <div className="hero-profile-img-div"><img src={hero.image.url} alt="hero-img" className="hero-profile-img" /></div>
            <div className="hero-profile-data-div"><HeroInfo /></div>
        </div>
    )
}
