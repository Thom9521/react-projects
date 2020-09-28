import React from "react";
import "./App.css";

// Importing components for routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components from app
import LemonadeStand from "./components/LemonadeStand";
import Header from "./components/Header";
import JokesAPI from "./components/JokesAPI";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LemonadeStand} />
          <Route path="/jokes" exact component={JokesAPI} />
        </Switch>
      </Router>
    </div>
  );
}

// export default connect(null, { drink, pay, no, run })(App);
export default App;
