import React from 'react';

//import PowerStats from './TeamPowerstats';
import AddHero from './AddHero';

import '../../style/home.css';

export default function Home() {
    return (
        <div className="home">
            <div>
                {/*<PowerStats /> */}
                <AddHero />
            </div>
            <div></div>
        </div>
    )
}
