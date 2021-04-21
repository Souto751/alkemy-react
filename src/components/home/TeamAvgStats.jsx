import React from 'react';

import '../../style/teamAvgStats.css';

export default function TeamAvgStats() {
    return (
        <div className="team-avg-stats">
            <div className="height-div">
                <p className="height-name">Avg. Height:</p>
                <p className="height-value">189cm | 6'45"</p>
            </div>
            <div className="weight-div">
                <p className="weight-name">Avg. Weight:</p>
                <p className="weight-value">200kg | 150p</p>
            </div>
        </div>
    )
}
