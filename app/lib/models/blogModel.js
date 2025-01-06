import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    Title: {type: String, required: true},
    Category: {type: String, required: true},
    Description: {type: String, required: true},
    Article: {type: String, required: true},
   image: {type: String, required: true},
    date: {type: Date, default: Date.now()}
})

const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema)
export default BlogModel