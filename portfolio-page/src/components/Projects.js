import React from 'react'
import { Modal, Header, Button } from 'semantic-ui-react';


export default function Projects() {
    return (
        <div className="project-section">
            
            <Modal trigger={<Button color='green'>Show Project</Button>} closeIcon>
                <Modal.Header as="h3">Web Applications: </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>ZEIT Deployment</Header>
                        <p>Think about which project you are most proud of up to this point that you have built from the ground up.</p>
                        <p>For this project, you will work on deploying that project using ZEIT,
                        and prepare it to be added to your portfolio site.</p>

                    </Modal.Description>
                </Modal.Content>
                


            </Modal>

            <Modal trigger={<Button color='blue'>Show Blogs</Button>} closeIcon>
                <Modal.Header as="h3">Side Projects: </Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>ZEIT Blogs</Header>
                        
                        <p>Blog Posts Here</p>
                        
                    </Modal.Description>
                </Modal.Content>


            </Modal>

        </div>
    )
}
