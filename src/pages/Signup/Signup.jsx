import React, { useState, useEffect, useReducer } from "react";
import * as authService from '../../service/authService'
import { Form, Button } from 'semantic-ui-react'

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
}

function reducer(state, action) {
    return {...state, [action.name]: action.value}
}

export default function Signup(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    async function handleSignup(e) {
        e.preventDefault()
        try {
            await authService.signup(state)
            props.handleSignupLogin()
            props.history.push('/')
        } catch (err) {console.log(err)}
    }

    return (
        <Form onSubmit={handleSignup}>
            <Form.Field>
                <label htmlFor="Name">name</label>
                <input type="text" name="name" onChange={e => dispatch(e.target)} value={state.name} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="Email">email</label>
                <input type="text" name="email" onChange={e => dispatch(e.target)} value={state.email}/>
            </Form.Field>
            <Form.Field>
                <label htmlFor="Password">password</label>
                <input type="text" name="password" onChange={e => dispatch(e.target)} value={state.password} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="PasswordConf">confirm</label>
                <input type="text" name="passwordConf" onChange={e => dispatch(e.target)} value={state.passowrdConf} />
            </Form.Field>
          <Button type="submit">SIGN UP</Button>
        </Form>
    )
}
