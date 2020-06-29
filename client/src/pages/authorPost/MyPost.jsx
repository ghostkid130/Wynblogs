import React, { useEffect, useContext } from 'react'
import Nav from '../../components/Nav'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const MyPost = () => {
    let history = useHistory();
    const { authorEntries, setAuthorsEntries } = useContext(UserContext)
     
    useEffect( () => {
        console.log("hit")
        axios.post('/blog/entries', { test: "test" }, 
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
         )
        .then(x => setAuthorsEntries(x.data))
        .catch(e => console.log(e))
    }, [])

    function handleDelete(id){
        axios.delete( `/blog/delete/${id}`, { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}} )
        .then(x => console.log(x.data))
        .catch(e => console.log(e))
    }

    return (
        <div>
            <Nav />
            {authorEntries?.map(item => (
                <div onClick={() => history.push(`/blog/${item._id}`)}>
                    <h1>{item.title}</h1>
                    <p>Comments: {item.comments.length} </p>
                    {console.log(item)}
                    <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                </div>
            ))}
        </div>
    )
}

export default MyPost
