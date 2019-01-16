import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Jumbotron />
                <Switch>
                    <Route exact path="/" component={Search} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;