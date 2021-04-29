import React from 'react';

import '../../style/teamAvgStats.css';

export default function TeamAvgStats() {
    return (
        <div className="team-avg-stats">
            <div className="height-div">
                <p className="height-name">Avg. Height:</p>
                <p className="height-value">{localStorage.getItem("avgHeight")} cm</p>
            </div>
            <div className="weight-div">
                <p className="weight-name">Avg. Weight:</p>
                <p className="weight-value">{localStorage.getItem("avgWeight")} kg</p>
            </div>
        </div>
    )
}
