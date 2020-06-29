import React, { useEffect, useContext } from 'react'
import Nav from '../../components/Nav'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'

const MyPost = () => {
    const { authorEntries, setAuthorsEntries } = useContext(UserContext)
     
    useEffect( () => {
        console.log("hit")
        axios.post('/blog/entries', { test: "test" }, 
            { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
         )
        .then(x => setAuthorsEntries(x.data))
        .catch(e => console.log(e))
    }, [])


    return (
        <div>
            <Nav />
            {authorEntries?.map(item => (
                <>
                    <h1>{item.title}</h1>
                    <p>Comments: {item.comments.length} </p>
                    {console.log(item)}
                </>
            ))}
        </div>
    )
}

export default MyPost
