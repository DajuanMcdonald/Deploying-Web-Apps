import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

export default class Blogs extends Component {
    handleChanges = (e) => {

        e.preventDefault();
        console.log(e.target.value);

    }
    render() {
        return (
            <div>
                <Menu>
                    <Menu.Item>
                        <Input
                            onChange={this.handleChanges}
                            className='icon'
                            icon='search'
                            placeholder='Search...' />
                    </Menu.Item>
                </Menu>
                <Router>
                    <Link to='/blog'>Blog 1</Link>
                    <Switch>
                        <Route exact path="/blog" />
                    </Switch>
                </Router>
                
            </div>
        )
    }
}
