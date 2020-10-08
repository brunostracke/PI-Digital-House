import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Questionario from './components/questionario.js';
import Homepage from './components/home.js';
import Authentication from './components/authentication.js';

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/auth' component={Authentication} />
            <Route path='/quest' component={Questionario} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
