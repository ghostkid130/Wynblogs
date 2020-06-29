import React, { useState, useContext, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import Nav  from '../../components/Nav'
import { BlogContext } from '../../context/BlogContext'
import axios from 'axios'
import { useLocation } from 'react-router-dom' 


const BlogPost = () => {
    let location = useLocation()
    const { blogEntry, setBlogEntry } = useContext(BlogContext)
    const [comment, setComment] = useState({
        comment: '',
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

    const handleComment = () => {
        console.log(comment)
        axios({
            method: "PATCH",
            url:`/blog/comment/${location.pathname.split("/blog/")[1]}`,
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            data: {comment: comment }
        }).then(x => setBlogEntry(x.data))
    }
    console.log(blogEntry)

    return (
        <>
        <Nav />
        <div style={{border:'1px solid black'}}>
            <h1>{blogEntry.title}   </h1>
            <p>{blogEntry.author}   </p>
            <p>{blogEntry.date}     </p>
            <p>{blogEntry.body}     </p>
        <div>
        {blogEntry.comments?.map((item) => (
            <div>
                <p>{item.author}</p>
                <p>{item.body}</p>
            </div>
        ))}
            <TextField 
                variant='outlined'
                multiline
                placeholder='Write a comment :-)'
                onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={() => handleComment()}>
                Post Comment
            </Button>
        </div>

        </div>
        </>
    )
}

export default BlogPost
