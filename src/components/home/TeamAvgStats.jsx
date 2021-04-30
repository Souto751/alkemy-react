import React, { useEffect, useState } from 'react';

import '../../style/teamAvgStats.css';

export default function TeamAvgStats() {

    const [weight, setWeight] = useState(localStorage.getItem("avgWeight"));
    const [height, setHeight] = useState(localStorage.getItem("avgHeight"));
    const [, forceUpdate] = useState(false);

    useEffect(() => {
        setWeight(localStorage.getItem("avgWeight"));
        setHeight(localStorage.getItem("avgHeight"));
        forceUpdate(n => !n);
    })

    return (
        <div className="team-avg-stats">
            <div className="height-div">
                <p className="height-name">Avg. Height:</p>
                <p className="height-value">{height} cm</p>
            </div>
            <div className="weight-div">
                <p className="weight-name">Avg. Weight:</p>
                <p className="weight-value">{weight} kg</p>
            </div>
        </div>
    )
}
