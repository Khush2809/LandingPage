import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/Faq" component={FAQ} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
