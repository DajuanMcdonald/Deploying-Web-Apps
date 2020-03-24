import React from 'react'
import {Menu, Input} from 'semantic-ui-react';

export default function ProjectPage() {
    return (
        <div>
            <Menu>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu>
            
        </div>
    )
}
