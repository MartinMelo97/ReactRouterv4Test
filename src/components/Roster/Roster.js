import { Switch, Route } from 'react-router-dom'
import Player from './Player'
import FullRoster from './FullRoster'
import React from 'react'

const Roster = () => (
    <div>
        <h2>This is a roster page!</h2>
        <Switch>
            <Route exact path="/roster" component={FullRoster}/>
            <Route path="/roster/:number" component={Player}/>
        </Switch>
    </div>

)

export default Roster;