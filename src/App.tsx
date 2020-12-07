import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NavBar from './components/NavBar/NavBar';
import Page0 from './components/Page0/Page0';
import Page1 from './components/Page1/Page1';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <h1 className="App">
                    <NavBar />
                    <Switch>
                        <Route path={'/page0'} component={Page0} />
                        <Route path={'/page1'} component={Page1} />
                    </Switch>
                </h1>
            </Router>
        );
    }
}

export default App;
