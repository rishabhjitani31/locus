import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css'


const KeyPress = lazy(() => import("./pages/MainPage"));

function App() {
  return (
      <div className="main-page">
        <Router>
          <Suspense fallback={<div>...Loading</div>}>
            <Switch>
              <Route path="/" exact component={KeyPress} />
            </Switch>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;