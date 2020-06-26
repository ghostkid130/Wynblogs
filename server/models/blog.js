const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }, owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, author: {
        type: String,
        required: true,
        trim: true
    }, body: {
        type: String,
        required: true,
        trim: true
    }, comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});


Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog