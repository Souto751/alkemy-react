import React from 'react';

import HeroInfo from './HeroInfo';

import '../../style/heroPage.css';

export default function HeroPage(props){
    console.log(props.location.state.selectedhero);
    return (
        <div className="hero-page">
            <div className="hero-profile-img-div"><img src={props.location.state.selectedhero.img} alt="hero-img" className="hero-profile-img" /></div>
            <div className="hero-progile-data-div"><HeroInfo props={props.location.state.selectedhero} /></div>
        </div>
    )
}
