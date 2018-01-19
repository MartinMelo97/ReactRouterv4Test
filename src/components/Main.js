import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Roster from './Roster/Roster'
import Home from './Others/Home';
import Schedule from './Others/Schedule';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/schedule" component={Schedule}/>
        </Switch>
    </main>
);

export default Main;
