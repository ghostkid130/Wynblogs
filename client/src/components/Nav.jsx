import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { StyleContext } from '../context/StyleContext'
import './nav.css'
import { useHistory } from 'react-router-dom'

const navStyle = makeStyles({
    root: {
      height: 48,
      padding: '0 30px',
      display: 'flex',
      'flex-direction': 'row',
      'justify-content': 'space-around'
    },
});

const Nav = () => {
    let history = useHistory();
    const [token, setToken] = useState(localStorage.getItem("token"))

    const { buttonsStyle } = useContext(StyleContext)
    const btn = buttonsStyle()
    const nav = navStyle()

    return (
        <div>
        <AppBar position="static">
        <Toolbar className={nav.root} variant="dense">
            <Typography variant="h6" noWrap>Material-UI</Typography>
            <div>
                {/* Handles Login Button Renders*/}
                {(Boolean(!token) ? 
                    <div className="authBtn-container">
                    <Button className={btn.root}
                            onClick={() => history.push('/logIn')}
                    >
                        Log In
                    </Button>
                    <Button 
                        className={btn.root}
                        onClick={() => history.push('/signUp')}
                    >
                        Sign Up
                    </Button>
                    </div> 
                :
                    <div className="authBtn-container">
                    {(Boolean(localStorage.getItem('author')) ? 
                        <Button 
                            className={btn.root}
                            onClick={() => history.push("makePost")}
                        >
                            Make Post
                        </Button> 
                        :
                        ''
                    )}
                    <Button 
                        className={btn.root}
                        onClick={() => {
                            localStorage.removeItem('token'); 
                            localStorage.removeItem('author');
                            setToken(false)
                        }}
                    >
                        Log out
                    </Button>
                    </div>
                )}
            
                

            </div>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default Nav
