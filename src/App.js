import React from "react";
import "./style/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Footer from "./components/Footer";
import PokemonState from "./context/Pokemon/PokemonState";

function App() {
  return (
    <PokemonState>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Pokedex} />
            <Route path="/pokemon/:id" component={Pokemon} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </PokemonState>
  );
}

export default App;
