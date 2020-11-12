import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home.component';
import About from './pages/about/About.component';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar as SeconadaryStar } from '@fortawesome/free-regular-svg-icons'
import { faStar, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStar, SeconadaryStar, faAngleDoubleDown)

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    )
};

export default App;