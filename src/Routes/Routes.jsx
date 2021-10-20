import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AreasDeAtuacao from "../Pages/PracticeAreas";

import About from "../Pages/About";
import PageNotFound from "../components/PageNotFound";



export function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Practice-Areas" component={AreasDeAtuacao} />
                <Route path="/Business" component={PageNotFound} />
                <Route path="/Insurance" component={PageNotFound} />
                <Route path="/Divorce" component={PageNotFound} />
                <Route path="/Industrial" component={PageNotFound} />
                <Route path="/Finance" component={PageNotFound} />
                <Route path="/Conciliation" component={PageNotFound} />
                <Route path="/News" component={PageNotFound} />
                <Route path="/Contact" component={ () => <PageNotFound /> } />
                <Route path="/GetConsult" component={ () => <PageNotFound /> } />
                <Route component={() => 
                    <PageNotFound />} />
                    
            </Switch>
        </Router>
    );
};
