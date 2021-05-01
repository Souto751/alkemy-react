//------------------//
//------Import------//
//------------------//

//------React------//
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

//------Components------//
import Home from './components/home/Home';
import Character from './components/hero-info/HeroPage';
import Login from './components/login/Login';
import HeroesDB from './components/heroes-list/HeroesDB';

//------Style------//
import './style/global.css'

//------------------//
//------Export------//
//------------------//

//------Component------//
export default function App() {

  const [heroesList, setHeroesList] = useState([{id: 0}]);
  const [tok, setTok] = useState("none");
  const [, forceUpdate] = useState(false);

  useEffect(() => {
    const loadCharacters = (id) => {
      fetch(`https://www.superheroapi.com/api.php/102149535345795/${id}`, {
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      })
        .then(res => {return res.json()})
        .then(res => {
          if(res.response === "error"){
            loadCharacters(id);
          }else{
            localStorage.setItem('heroesList', JSON.stringify([...JSON.parse(localStorage.getItem('heroesList')), res]));
          }
        })
    }
    
    if(!localStorage.getItem('heroesList')){
      localStorage.setItem('heroesList', JSON.stringify([{id: "0"}]));
    }
    

    if(JSON.parse(localStorage.getItem('heroesList')).length <= 1){
      for(let i = 1; i < 732; i++){
        loadCharacters(i);
      }
    }
    
    if(!localStorage.getItem('avgIntelligence')){
      localStorage.setItem('avgIntelligence', 0)
    }
    if(!localStorage.getItem('avgStrength')){
      localStorage.setItem('avgStrength', 0)
    }
    if(!localStorage.getItem('avgSpeed')){
      localStorage.setItem('avgSpeed', 0)
    }
    if(!localStorage.getItem('avgDurability')){
      localStorage.setItem('avgDurability', 0)
    }
    if(!localStorage.getItem('avgPower')){
      localStorage.setItem('avgPower', 0)
    }
    if(!localStorage.getItem('avgCombat')){
      localStorage.setItem('avgCombat', 0)
    }
    if(!localStorage.getItem('avgHeight')){
      localStorage.setItem('avgHeight', 0)
    }
    if(!localStorage.getItem('avgWeight')){
      localStorage.setItem('avgWeight', 0)
    }
    if(!localStorage.getItem('goodCounter')){
      localStorage.setItem('goodCounter', 0)
    }
    if(!localStorage.getItem('badCounter')){
      localStorage.setItem('badCounter', 0)
    }
    if(!localStorage.getItem('bestStat')){
      localStorage.setItem('bestStat', "none")
    }
    if(!localStorage.getItem('hero')){
      localStorage.setItem('hero', JSON.stringify({}))
    }
    if(!localStorage.getItem('team')){
      localStorage.setItem('team', JSON.stringify([]))
    }
    if(!localStorage.getItem('token')){
      localStorage.setItem('token', "none")
    }else{
      setTok(localStorage.getItem('token'));
      forceUpdate(n => !n);
    }
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('heroesList'));
    if(data.length > 1){
      setHeroesList(data);
    }
    forceUpdate(n => !n);
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/alkemy-react/">{localStorage.getItem('token') !== "none" ? <Redirect to="/alkemy-react/login" /> : <Home />}</Route>

          <Route exact path="/alkemy-react/characters-list">{localStorage.getItem('token') !== "none" ? <Redirect to="/alkemy-react/login" /> : <HeroesDB heroes={heroesList} />}</Route>

          <Route path="/alkemy-react/characters/">{localStorage.getItem('token') !== "none" ? <Redirect to="/alkemy-react/login" /> : <Character />}</Route>

          <Route exact path="/alkemy-react/login"><Login /></Route>
        </Switch>

      </div>
    </Router>
  );
}