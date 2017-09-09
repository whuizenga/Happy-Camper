import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import { setAxiosDefaults } from './util';
import HomePage from './Components/Homepage.jsx';
import MapPage from './Components/MapPage.jsx';

class App extends Component {
  conponentWillMount() {
    setAxiosDefaults();
  }
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MapPage} />

      </div>
      </Router>
    );
  }
}

export default App;
