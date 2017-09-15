import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { setAxiosDefaults } from './util';
import HomePage from './Components/HomePage/Homepage.jsx';
import MapPage from './Components/MapPage/MapPage.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import CampgroundPage from './Components/CampgroundPage/CampgroundPage.jsx';
import SignUpPage from './Components/SignUpPage/SignUpPage.jsx';
import LogInPage from './Components/LoginPage/LoginPage.jsx';

class App extends Component {
  conponentWillMount() {
    setAxiosDefaults();
  }
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/campground/:lat/:long" component={CampgroundPage} />


      </div>
      </Router>
    );
  }
}

export default App;
