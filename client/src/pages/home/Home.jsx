import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Nav  from '../../components/Nav'
import axios from 'axios'

const Home = () => {
    const [ blogs, setBlogs ] = useState([])

    useEffect(()=> {
        axios({ 
            method: "GET",
            url:'/blog/all'
        }).then(x => setBlogs(x.data))
        .catch(e => console.log(e.message))
    },[])

    return (
        <div>
            <Nav />
            {blogs?.map(item => (
            <>
            <Container max-width="md" style={{border: "1px solid black"}}>
                <div className="container-account">
                    <AccountCircle fontSize="large"/>
                    <p>Posted by: {item.author}</p>
                </div>
                <h1>{item.title}</h1>
                <p>Posted Time and Date</p>
            </Container>
            </>
            ))}
            {/* <Modal 
                open={mode}
                onClose={() => setMode(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <p>Hello</p>
            </Modal> */}
        </div>
    )
}

export default Home
