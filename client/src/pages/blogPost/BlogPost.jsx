import React, { useState, useContext, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import Nav  from '../../components/Nav'
import { BlogContext } from '../../context/BlogContext'
import axios from 'axios'
import { useLocation } from 'react-router-dom' 


const BlogPost = () => {
    let location = useLocation()
    const { blogEntry, setBlogEntry } = useContext(BlogContext)
    const [comment, setComment] = useState({
        comment: '',
        ref: ''
    })


    useEffect(() => {
        if(!blogEntry._id){
            axios({
                method:"GET",
                url:`/blog/${location.pathname.split("/blog/")[1]}`,
                data: location.pathname.split("/blog/")[1]
            }).then(x => {
                setBlogEntry(x.data)
            }).catch(e => console.log(e))
    }}, [])

    return (
        <>
        <Nav />
        <div style={{border:'1px solid black'}}>
            <h1>{blogEntry.title}   </h1>
            <p>{blogEntry.author}   </p>
            <p>{blogEntry.time}     </p>
            <p>{blogEntry.text}     </p>
        <div>
            <TextField 
                variant='outlined'
                multiline
                placeholder='Write a comment :-)'
                onChange={(e) => setComment(e.target.value)}
            />
        </div>

        </div>
        </>
    )
}

export default BlogPost
