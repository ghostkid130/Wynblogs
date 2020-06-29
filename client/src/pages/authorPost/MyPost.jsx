import React, { useEffect, useContext, useState } from 'react'
import Nav from '../../components/Nav'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './mypost.css'

const MyPost = () => {
    let history = useHistory();
    const { authorEntries, setAuthorsEntries } = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
     
    useEffect( () => {
        console.log("hit")
        axios.post('/blog/entries', { test: "test" }, 
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        .then(x => setAuthorsEntries(x.data))
        .catch(e => console.log(e))
    }, [toggle])

    function handleDelete(id){
        axios.delete( `/blog/delete/${id}`, { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}} )
        .then(x => setToggle(!toggle))
        .catch(e => console.log(e))
    }

    return (
        <div>
            <Nav />
            {authorEntries?.map(item => (
                <div className='post-container'>
                    <h1 onClick={(e) => {
                        history.push(`/blog/${item._id}`)
                    }}>
                        {item.title}
                    </h1>
                    
                    <p>Comments: {item.comments.length} </p>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={() => handleDelete(item._id)}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default MyPost
