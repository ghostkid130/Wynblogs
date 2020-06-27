import React, { useState, useContext } from 'react'
import { Paper, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import Nav  from '../../components/Nav'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import './signUp.css'
import axios from 'axios'

const Login = () => {
    let history = useHistory()
    const { userAccount, setUserAccount } = useContext(UserContext)

    const handleLogin = () => {
        axios.post('/user', { ...userAccount })
            .then( data => {
                localStorage.setItem('token', data.data.token);
                sessionStorage.setItem('author', userAccount.isAuthor)
                setUserAccount({
                    firstName: '',  lastName:'',
                    email:'',   password:'',
                    isAuthor: false
                })
                history.push('/')
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
        <Nav />
        <Paper>
        Sign Up
        <form autoComplete="off" onSubmit={handleLogin} className="signUp-form">
            <TextField 
            id="signUp-fName"
            variant="filled"
            label="First Name"
            onChange={(e) => setUserAccount({...userAccount, firstName: e.target.value})}
            />
            <TextField 
            id="signUp-lName"
            variant="filled"
            label="Last Name"
            onChange={(e) => setUserAccount({...userAccount, lastName: e.target.value})}
            />
            <TextField 
            id="signUp-email"
            variant="filled"
            label="Email"
            onChange={(e) => setUserAccount({...userAccount, email: e.target.value})}
            />
            <TextField 
            id="signUp-password"
            variant="filled"
            label="Password"
            type="password"
            onChange={(e) => setUserAccount({...userAccount, password: e.target.value})}
            />
            <Button
                id="signUp-btn"
                onClick={handleLogin}
            >
                Login</Button>
        </form>
        </Paper>
        </div>
    )
}

export default Login
