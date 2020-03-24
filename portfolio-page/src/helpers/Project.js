import React from 'react'
import axios from 'axios';
import { Card, Button, Image } from 'semantic-ui-react';
import Projects from '../components/Projects';
import moment from 'moment';


export default function Project(props) {
    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://api.github.com/users/fiopwk')
            .then(res => {
                setUser(res.data)
                console.log(res)
            }).catch(err => console.error(err.message))
    }, [])
    
    return (
        <div className=" card project-card">

            <Button disabled>Get a Quote</Button>
            <Card>
                <Image src={user.avatar_url} />
                <Card.Content>

                    <Card.Header dividing as="h3">
                        {user.name}
                    </Card.Header>
                    <Card.Description>
                        <p key={user.id}>{user.bio}</p>
                        <Card.Meta>Member Since: {moment(user.created_at).year()}</Card.Meta>
                    </Card.Description>

                </Card.Content>
                    <Projects />
            </Card>
        </div>
    )
   
}
