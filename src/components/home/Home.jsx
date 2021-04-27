import React, {useState} from 'react';

import PowerStats from './TeamPowerstats';
import AddHero from './AddHero';
import AvgStats from './TeamAvgStats';
import Hero from './Hero';


import '../../style/home.css';

export default function Home() {

    let auxRender;
    const [character, setCharacter] = useState({});
    const [teamPowerStats, setTeamPowerStats] = useState([0, 0, 0, 0, 0, 0]);
    const [teamAvgStats, setTeamAvgStats] = useState([0, 0]);
    const [teamMembers, setTeamMembers] = useState([]);

    const [goodCounter, setGoodCounter] = useState(0);
    const [badCounter, setBadCounter] = useState(0);
    
    const addHeroToTeam = async (characterName) => {
        if(teamMembers.length === 6){
            alert("Max team size reached. If you want to add a new hero, remove one from the team.");
        }else{
            await fetch('https://superheroapi.com/api/102149535345795/search/' + characterName)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    console.log(response.results[0])
                    setCharacter(ch => ch = response.results[0]);
                });
                console.log(character);
            if(teamMembers.length >= 0){
                let isCharacterOnTeam = false;
                let cantAdd = false;
                for(let i = 0; i < teamMembers.length; i++){
                    if(teamMembers[i].name === character.name){
                        isCharacterOnTeam = true;
                        alert("This character is already on the team.");
                    }
                }

                /*if(goodCounter === 3 && character.biography.alignment === "good"){
                    alert("There are 3 good characters on the team, you can't add another one.");
                    cantAdd = true;
                }
                
                if(badCounter === 3 && character.biography.alignment === "bad"){
                    alert("There are 3 bad characters on the team, you can't add another one.");
                    cantAdd = true;
                }*/

                if(!cantAdd && !isCharacterOnTeam){
                    setTeamMembers(teamMembers => {
                        teamMembers.push(character);
                    });
                    /*if(character.biography.alignment === "good"){
                        setGoodCounter(goodCounter => {
                            goodCounter += 1;
                        });
                    }else{
                        setBadCounter(badCounter => {
                            badCounter += 1;
                        })
                    }*/
                }
            }
        }
    }

    const removeHeroFromTeam = (position) => {
        if(teamMembers.length === 0){
            alert("There's no characters on the team yet.");
        }else{
            setTeamMembers( members => {
                members.filter((member, i) => i !== position);
            });
        }
    }

    if(teamMembers){
        auxRender = <Hero />
    }else{
        auxRender = <Hero heroesList={teamMembers} deleteHero={removeHeroFromTeam} />
    }
    
    return (
        <div className="home">
            <div className="home-top-components">
                <AddHero addCharacter={addHeroToTeam} />
                <PowerStats stats={[]} />
                <AvgStats />
            </div>
            <div className="team-members-div">
                {auxRender}
            </div>
        </div>
    )
}
