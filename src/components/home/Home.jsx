import React from 'react';

import PowerStats from './TeamPowerstats';

import '../../style/home.css';

export default function Home() {
    return (
        <div className="home">
            <div>
                <PowerStats />
            </div>
            <div></div>
        </div>
    )
}
