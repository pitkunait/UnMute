import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { history } from './services/history';

import Page0 from './components/Page0/Page0';
import Page1 from './components/Page1/Page1';
import Chart from './components/Chart/Chart';

class App extends Component {
    state = {
        var3: 10,
    };

    incrementVar = () => {
        this.setState({ var3: this.state.var3 + 1 });
    };

    render() {
        return (
            <Router history={history}>
                <h1 className="App">
                    <Drawer variant="permanent">
                        <List>
                            <ListItem
                                button
                                style={{ width: 240 }}
                                onClick={() => {
                                    history.push('/page1');
                                }}
                            >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText>Page1</ListItemText>
                            </ListItem>

                            <ListItem
                                button
                                style={{ width: 240 }}
                                onClick={() => {
                                    history.push('/chart');
                                }}
                            >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText>ClickPie</ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>

                    {/* here comes the switch */}
                    <Switch>
                        <Route path={'/page1'}>
                            <Page1 var3={this.state.var3} incrementVar={this.incrementVar} />
                        </Route>

                        <Route path={'/chart'}>
                            <Chart />
                        </Route>

                        <Redirect to={'/page1'} />
                    </Switch>
                </h1>
            </Router>
        );
    }
}

export default App;
