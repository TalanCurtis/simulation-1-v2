import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Shelves from './components/Shelves/Shelves'
import Bins from './components/Bins/Bins';
import Detail from './components/Detail/Detail';

export default(
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/:id' component={Bins}/>
        <Route path='/bin/:id' component={Detail} />
    </Switch>
)