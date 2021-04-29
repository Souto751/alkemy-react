import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/heroesDB.css';

export default function heroesDB() {

    const heroes = JSON.parse(localStorage.getItem('heroesList'));

    const addTeam = (hero) => {
        const current = JSON.parse(localStorage.getItem('team'));
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
                    }else{
                        alert("There are 3 characters with 'good' alignment.");
                    }
                }else{
                    if(parseInt(localStorage.getItem('badCounter')) < 3){
                        current.push(hero);
                        localStorage.setItem('badCounter', parseInt(localStorage.getItem('badCounter')) + 1);

                        localStorage.setItem('avgIntelligence', parseInt(localStorage.getItem('avgIntelligence')) + parseInt(hero.powerstats["intelligence"]));
                        localStorage.setItem('avgStrength', parseInt(localStorage.getItem('avgStrength')) + parseInt(hero.powerstats["strength"]));
                        localStorage.setItem('avgSpeed', parseInt(localStorage.getItem('avgSpeed')) + parseInt(hero.powerstats["speed"]));
                        localStorage.setItem('avgDurability', parseInt(localStorage.getItem('avgDurability')) + parseInt(hero.powerstats["durability"]));
                        localStorage.setItem('avgPower', parseInt(localStorage.getItem('avgPower')) + parseInt(hero.powerstats["power"]));
                        localStorage.setItem('avgCombat', parseInt(localStorage.getItem('avgCombat')) + parseInt(hero.powerstats["combat"]));

                        localStorage.setItem('avgHeight', parseInt(parseInt(localStorage.getItem('avgHeight')) + parseInt(hero.appearance.height[1].split(" ")[0])));
                        localStorage.setItem('avgWeight', parseInt(parseInt(localStorage.getItem('avgWeight')) + parseInt(hero.appearance.weight[1].split(" ")[0])));

                        localStorage.setItem('team', JSON.stringify(current))
                    }else{
                        alert("There are 3 characters with 'bad' alignment.");
                    }
                }

            }else{
                alert("The hero is already on the team, please select another");
            }
        }
        }

    return (
        <div className="heroes-db">
            <div className="return-home">
                <Link to="/"><button>← Go Back</button></Link>
            </div>
        {
            heroes.map((x, i = 0) => {
                return x.id !== "0" ? 
                <div key={i} className={`heroe-list-div ${x.biography.alignment === "good" ? "good-hero" : "bad-hero"}`}>
                    <div className="img-div"><img src={x.image.url} alt="hero-img"/></div>
                    <div className="name-div"><p>{x.name}</p></div>
                    <div className="buttons-div">
                        <button onClick={() => addTeam(x)}>+</button>
                        <div className="info-button"><Link to={`/characters/${x.id}`} hero={x}><button className="goto-info-btn" onClick={() => localStorage.setItem("hero", JSON.stringify(x))}>i</button></Link></div>
                    </div>
                </div>
                :
                <div></div>
            })
        }
        </div>
    )
}
