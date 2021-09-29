import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import '../src/components/styles/scss/global/style.css'

import TopBar from "./components/TopBar";
import MainMenu from "./components/MainMenu";
import Banner from './components/Banner';
import Footer from './components/Footer';
import HotelPage from './components/pages/HotelPage';
import HomePage from './components/pages/HomePage';

function App() {
  return (

    <div className="App">

      <TopBar />
      <MainMenu />
      <Banner />
      <Router>
        <Switch>
          <Route exact path="/hotel" component={HotelPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />

    </div>

  );
}

export default App;
