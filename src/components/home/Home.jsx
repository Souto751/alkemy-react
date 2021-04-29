import React from 'react';

import PowerStats from './TeamPowerstats';
import AddHero from './AddHero';
import AvgStats from './TeamAvgStats';
import Hero from './Hero';


import '../../style/home.css';

export default function Home() {
    
    return (
        <div className="home">
            <div className="home-top-components">
                <AddHero />
                <PowerStats />
                <AvgStats />
            </div>
            <div className="team-members-div">
                <Hero />
            </div>
        </div>
    )
}
