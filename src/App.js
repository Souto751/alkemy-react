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

  const [heroesList, setHeroesList] = useState([{id: 0}])
  const [logged, setLogged] = useState("none")

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

    localStorage.setItem('heroesList', JSON.stringify([{id: "0"}]));

    for(let i = 1; i < 732; i++){
      loadCharacters(i);
    }
    
    localStorage.setItem('token', "none");
    localStorage.setItem('avgIntelligence', 0);
    localStorage.setItem('avgStrength', 0);
    localStorage.setItem('avgSpeed', 0);
    localStorage.setItem('avgDurability', 0);
    localStorage.setItem('avgPower', 0);
    localStorage.setItem('avgCombat', 0);
    localStorage.setItem('avgHeight', 0);
    localStorage.setItem('avgWeight', 0);
    localStorage.setItem('goodCounter', 0);
    localStorage.setItem('badCounter', 0);
    localStorage.setItem('bestStat', "none");
    localStorage.setItem('hero', JSON.stringify({}));
    localStorage.setItem("team", JSON.stringify([]));
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('heroesList'));
    const login = localStorage.getItem("token");
    if(data.length > 1){
      setHeroesList(data);
    }
    setLogged(login);
  }, [])

  


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/alkemy-react/">{logged === "none" ? <Redirect to="/alkemy-react/login" /> : <Home />}</Route>

          <Route exact path="/alkemy-react/characters-list">{logged === "none" ? <Redirect to="/alkemy-react/login" /> : <HeroesDB heroes={heroesList} />}</Route>

          <Route path="/alkemy-react/characters/">{logged === "none" ? <Redirect to="/alkemy-react/login" /> : <Character />}</Route>

          <Route exact path="/alkemy-react/login"><Login log={setLogged} /></Route>
        </Switch>

      </div>
    </Router>
  );
}