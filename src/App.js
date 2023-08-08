import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetApiCall from "./Components/GetApiCall";
import PostApiCall from "./Components/PostApiCall";
import PutApiCall from './Components/PutApiCall';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/get">
            <GetApiCall />
          </Route>
          <Route path="/post">
            <PostApiCall />
          </Route>
          <Route path="/put">
            <PutApiCall />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
