import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Page0 from './components/Page0/Page0';
import Page1 from './components/Page1/Page1';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { history } from './services/history';

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
                                    history.push('/page0');
                                }}
                            >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>

                                <ListItemText primary={'Page2'} />
                            </ListItem>
                        </List>
                    </Drawer>

                    <Switch>
                        <Route path={'/page0'} component={Page0} />

                        <Route path={'/page1'}>
                            <Page1 var3={this.state.var3} incrementVar={this.incrementVar} />
                        </Route>

                        <Redirect to={'/page1'} />
                    </Switch>
                </h1>
            </Router>
        );
    }
}

export default App;
