import React, { useState } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core'
import './createPost.css'
import axios from 'axios'
import Nav from '../../components/Nav'

const CreatePost = () => {

    const [ post, setPost ] = useState({
        title: '', body:''
    })

    const createPost = () => {
        axios({
            method: 'POST',
            url: '/blog/new', 
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            data: {...post}
        })
        .then((data) => console.log(data))
        .catch(e => console.log(e))
    }

    return (
        <div>
            <Nav />
            <form className="post-container" autoComplete="false">
                <TextField 
                    variant="outlined" 
                    placeholder="Title" 
                    abel="title"
                    onChange={(e) => {setPost({...post, title: e.target.value})}}
                />
                <TextField 
                    multiline
                    variant="outlined" 
                    placeholder="Text" 
                    label="text"
                    onChange={(e) => {setPost({...post, body: e.target.value})}}
                />
                <Button onClick={() => createPost()}>
                    Create Post
                </Button>
            </form>
        </div>
    )
}

export default CreatePost
