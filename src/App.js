//------------------//
//------Import------//
//------------------//

//------React------//
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//------Components------//
import Home from './components/home/Home';
import Character from './components/hero-info/HeroPage';
import Login from './components/login/Login';
import Register from './components/login/Register';
import PswdRecovery from './components/login/PswdRecovery';
import PswdChange from './components/login/PswdChange';

//------Style------//
import './style/global.css'

//------------------//
//------Export------//
//------------------//

//------Component------//
export default function App() {

  return (
    <Router>
      <div className="App">
        
        <Route exact path="/" component={Home} />

        <Route path="/character/" component={Character} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Register} />

        <Route exact path="/reset-password" component={PswdRecovery} />

        <Route exact path="/reset-password/enter-new-password" component={PswdChange} />

      </div>
    </Router>
  );
}