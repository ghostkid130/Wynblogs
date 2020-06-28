import React, { useState, useEffect, useContext } from 'react'
import { Container } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { BlogContext } from '../../context/BlogContext'
import { useHistory } from 'react-router-dom'
import Nav  from '../../components/Nav'
import axios from 'axios'

const Home = () => {
    const [ blogs, setBlogs ] = useState([])
    const { setBlogEntry } = useContext(BlogContext)
    let history = useHistory()

    useEffect(()=> {
        axios({ 
            method: "GET",
            url:'/blog/all'
        }).then(x => { setBlogs(x.data); console.log(x.data) }
        ).catch(e => console.log(e.message))
    },[])

    function handlePostClick(id){
        console.log(id)
        axios({
            method:"GET",
            url:`/blog/${id}`,
            data: id
        }).then(x => {
            setBlogEntry(x.data)
            history.push(`/blog/${id}`)
        }).catch(e => console.log(e))
    }

    return (
        <div>
            <Nav />
            {blogs?.map(item => (
            <>
            <Container 
                max-width="md" 
                style={{border: "1px solid black"}} 
                key={item._id}
                onClick={() => handlePostClick(item._id)}
            >
                <div className="container-account" >
                    <AccountCircle fontSize="large"/>
                    <p>Posted by: {item.author}</p>
                </div>
                <h1>{item.title}</h1>
                <p>Posted: {item.date}</p>
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
