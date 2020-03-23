import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import SetRoutes from './routes/SetRoutes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          Dajuan Mcdonald
        <Router>
            <nav className="nav">
              <Link style={{color: 'white', textDecoration: 'none'}} to='/projects'>Project</Link>
              <Link style={{color: 'white', textDecoration: 'none'}} to='/blogs'>Blog</Link>
              <Link style={{color: 'white', textDecoration: 'none'}} to='/contact'>Contact</Link>

            </nav>
            <Switch>
              <Route exact path="/projects"/>
              <Route exact path="/Blog" />
              <Route path="/contact"/>

            </Switch>


          </Router>




        </div>

      </header>
      <SetRoutes/>

      



    </div>
  );
}

export default App;
