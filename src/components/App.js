import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={Detail}></Route>
    </Router>
  );
};

export default App;
