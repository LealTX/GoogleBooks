import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Jumbotron />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;