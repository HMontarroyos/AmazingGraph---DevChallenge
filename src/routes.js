import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Contact, Features } from "./views";
import { Header } from "./components";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/features" component={Features} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
