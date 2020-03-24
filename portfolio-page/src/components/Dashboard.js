import React from 'react'
import { Tab } from 'semantic-ui-react';
import Project from '../helpers/Project';
import Contact from './Contact';
import Blogs from './Blogs';
import ProjectPage from './ProjectPage';
import Home from './Home';

export default function DashBoard() {
    const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane>Home <Home /></Tab.Pane> },
        { menuItem: 'Projects', render: () => <Tab.Pane>Projects <ProjectPage /></Tab.Pane> },
        { menuItem: 'Blogs', render: () => <Tab.Pane>Blogs <Blogs /></Tab.Pane> },
        { menuItem: 'About', render: () => <Tab.Pane>About <Project /></Tab.Pane> },
        { menuItem: 'Contact', render: () => <Tab.Pane>Contact <Contact /></Tab.Pane> },

    ]
    return (
        <div>
            <Tab style={{ backgroundColor: '#1023' }} menu={{ color: 'red' }} panes={panes} />
        </div>

    )

}

