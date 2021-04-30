import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';

import '../../style/heroesDB.css';

export default function HeroesDB() {

    const heroes = JSON.parse(localStorage.getItem('heroesList'));
    const [added, setAdded] = useState(false);

    const addTeam = (hero) => {
        const current = JSON.parse(localStorage.getItem('team'));
        let teamWeight = 0;
        let teamHeight = 0;
        let teamStats = [
            {name: "intelligence", value: 0},
            {name: "strength", value: 0},
            {name: "speed", value: 0},
            {name: "durability", value: 0},
            {name: "power", value: 0},
            {name: "combat", value: 0}
        ];
        if(current.length === 6){
            alert("Maximum size of team members reached");
        }else{
            let isOnTeam = false;
            for(let i = 0; i < current.length; i++){
                if(current[i].id === hero.id){
                    isOnTeam = true;
                }
            }
    
            if(!isOnTeam){
                if(hero.biography.alignment === "good"){
                    if(parseInt(localStorage.getItem('goodCounter')) < 3){
                        current.push(hero);
                        localStorage.setItem('goodCounter', parseInt(localStorage.getItem('goodCounter')) + 1);

                        localStorage.setItem('avgIntelligence', parseInt(localStorage.getItem('avgIntelligence')) + (hero.powerstats["intelligence"] === "null" ? 0 : parseInt(hero.powerstats["intelligence"])));
                        localStorage.setItem('avgStrength', parseInt(localStorage.getItem('avgStrength')) + (hero.powerstats["strength"] === "null" ? 0 : parseInt(hero.powerstats["strength"])));
                        localStorage.setItem('avgSpeed', parseInt(localStorage.getItem('avgSpeed')) + (hero.powerstats["speed"] === "null" ? 0 : parseInt(hero.powerstats["speed"])));
                        localStorage.setItem('avgDurability', parseInt(localStorage.getItem('avgDurability')) + (hero.powerstats["durability"] === "null" ? 0 : parseInt(hero.powerstats["durability"])));
                        localStorage.setItem('avgPower', parseInt(localStorage.getItem('avgPower')) + (hero.powerstats["power"] === "null" ? 0 : parseInt(hero.powerstats["power"])));
                        localStorage.setItem('avgCombat', parseInt(localStorage.getItem('avgCombat')) + (hero.powerstats["combat"] === "null" ? 0 : parseInt(hero.powerstats["combat"])));

                        localStorage.setItem('avgHeight', parseInt(localStorage.getItem('avgHeight')) + (hero.appearance.height[1] === "" ? 0 : parseInt(hero.appearance.height[1].split(" ")[0])));
                        localStorage.setItem('avgWeight', parseInt(localStorage.getItem('avgWeight')) + (hero.appearance.weight[1] === "" ? 0 : parseInt(hero.appearance.weight[1].split(" ")[0])));

                        localStorage.setItem('team', JSON.stringify(current))
                        alert(hero.name + " added to the team");
                    }else{
                        alert("There are 3 characters with 'good' alignment.");
                    }
                }else{
                    if(parseInt(localStorage.getItem('badCounter')) < 3){
                        current.push(hero);
                        localStorage.setItem('badCounter', parseInt(localStorage.getItem('badCounter')) + 1);

                        localStorage.setItem('avgIntelligence', parseInt(localStorage.getItem('avgIntelligence')) + (hero.powerstats["intelligence"] === "null" ? 0 : parseInt(hero.powerstats["intelligence"])));
                        localStorage.setItem('avgStrength', parseInt(localStorage.getItem('avgStrength')) + (hero.powerstats["strength"] === "null" ? 0 : parseInt(hero.powerstats["strength"])));
                        localStorage.setItem('avgSpeed', parseInt(localStorage.getItem('avgSpeed')) + (hero.powerstats["speed"] === "null" ? 0 : parseInt(hero.powerstats["speed"])));
                        localStorage.setItem('avgDurability', parseInt(localStorage.getItem('avgDurability')) + (hero.powerstats["durability"] === "null" ? 0 : parseInt(hero.powerstats["durability"])));
                        localStorage.setItem('avgPower', parseInt(localStorage.getItem('avgPower')) + (hero.powerstats["power"] === "null" ? 0 : parseInt(hero.powerstats["power"])));
                        localStorage.setItem('avgCombat', parseInt(localStorage.getItem('avgCombat')) + (hero.powerstats["combat"] === "null" ? 0 : parseInt(hero.powerstats["combat"])));

                        localStorage.setItem('team', JSON.stringify(current))
                        alert(hero.name + " added to the team");
                    }else{
                        alert("There are 3 characters with 'bad' alignment.");
                    }
                }

                for(let i = 0; i < current.length; i++){
                    teamWeight += parseInt(current[i].appearance.weight[1].split(" ")[0]);
                    teamHeight += parseInt(current[i].appearance.height[1].split(" ")[0]);
                }

                localStorage.setItem('avgWeight', parseInt(teamWeight / current.length));
                localStorage.setItem('avgHeight', parseInt(teamHeight / current.length));

                setAdded(true);
            }else{
                alert("The hero is already on the team, please select another");
            }
        }
        teamStats[0].value = parseInt(localStorage.getItem('avgIntelligence'));
        teamStats[1].value = parseInt(localStorage.getItem('avgStrength'));
        teamStats[2].value = parseInt(localStorage.getItem('avgIntelligence'));
        teamStats[3].value = parseInt(localStorage.getItem('avgDurability'));
        teamStats[4].value = parseInt(localStorage.getItem('avgPower'));
        teamStats[5].value = parseInt(localStorage.getItem('avgCombat'));

        teamStats.sort((a, b) => b.value - a.value);
        localStorage.setItem('bestStat', teamStats[0].name)
    }

    return (
        added === false ? 
        <div className="heroes-db">
            <div className="return-home">
                <Link to="/alkemy-react/"><button>← Go Back</button></Link>
            </div>
        {
            heroes.map((x, i = 0) => {
                return x.id !== "0" ? 
                <div key={i} className={`heroe-list-div ${x.biography.alignment === "good" ? "good-hero" : "bad-hero"}`}>
                    <div className="img-div"><img src={x.image.url} alt="hero-img"/></div>
                    <div className="name-div"><p>{x.name}</p></div>
                    <div className="buttons-div">
                        <button onClick={() => addTeam(x)}>+</button>
                        <div className="info-button"><Link to={`/alkemy-react/characters/${x.id}`}><button className="goto-info-btn" onClick={() => localStorage.setItem("hero", JSON.stringify(x))}>i</button></Link></div>
                    </div>
                </div>
                :
                <div></div>
            })
        }
        </div>
        :
        <Redirect to="/alkemy-react/" />
    )
}
