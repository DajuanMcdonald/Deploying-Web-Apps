import React from 'react'
import { Tab } from 'semantic-ui-react';
import Project from '../helpers/Project';
import Contact from './Contact';

export default function NavigationBar() {
    const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane>Home</Tab.Pane>},
        { menuItem: 'Projects', render: () => <Tab.Pane>Projects</Tab.Pane>},
        { menuItem: 'Blogs', render: () => <Tab.Pane>Blogs</Tab.Pane>},
        { menuItem: 'About', render: () => <Tab.Pane>About <Project/></Tab.Pane>},
        { menuItem: 'Contact', render: () => <Tab.Pane>Contact <Contact/></Tab.Pane>}
    ]
    return (
        <div>
            <Tab menu={{color: 'red'}} panes={panes} />
            
        </div>
    )
}
