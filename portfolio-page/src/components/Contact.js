import React from 'react'
import { Button, Checkbox, Form, TextArea } from 'semantic-ui-react';

export default function Contact() {
    return (
        <div className="contact-form">
            <Form>
                <Form.Field required>
                    <label>Name</label>
                    <input type='text' />
                </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input type='email' />
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <TextArea />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I wish to be contacted via email' />
                </Form.Field>
                <Button color='green' type='submit'>Submit</Button>
            </Form>


        </div>
    )
}
