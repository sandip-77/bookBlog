import asyncHandler from 'express-async-handler';
import Post from '../models/PostModel.js';


// create a post 
// route POST / api/posts/create

const createPost = asyncHandler(async(req, res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc,
        photo: req.body.photo,
        category: req.body.category,
        tags: req.body.tags,
        podcastAvailable: req.body.podcastAvailable
    })

    const createdPost = await post.save();
    res.status(201).json(createdPost)

});




// get all posts
// route GET / api/posts/

const getPosts = asyncHandler(async(req, res) => {
    const catName = req.query.cat;
    const tagName = req.query.tag;
    const pageSize = 6
    const page = Number(req.query.pagenumber) || 1

    const keyword = req.query.keyword ? {
        name: {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}
    const count = await Post.countDocuments({...keyword})
    let posts;
    if(catName){
            posts = await Post.find({...keyword, category:catName}).limit(pageSize).skip(pageSize*(page-1))
    } else if(tagName){
            posts = await Post.find({...keyword, tags:{ $in: [tagName]}}).limit(pageSize).skip(pageSize*(page-1))
    } else{
            posts = await Post.find({...keyword}).limit(pageSize).skip(pageSize*(page-1))
    }
    res.json({posts, page, pages: Math.ceil(count/pageSize)}); 

})





// get a single post
// route GET / api/posts/:id

const getSinglePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id)

    if(post){
        res.json(post)
    } else {
        res.status(404)
        throw new Error("Post not found!!")
    }
});






// update a  post
// route PUT / api/posts/:id

const updatePost = asyncHandler(async(req, res) => {
    const { title, desc, photo, category, tags, podcastAvailable } = req.body
    const post = await Post.findById(req.params.id)

    if(post) {
        post.title = title
        post.desc = desc
        post.photo = photo
        post.category = category
        post.tags = tags
        post.podcastAvailable = podcastAvailable
        
        const updatedPost = await post.save()
        res.json(updatedPost)
    } else{
        res.status(400)
        throw new Error("Post not found!!")
    }

})


// delete a  post
// route DELETE / api/posts/:id

const deletePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id)

    if(post){
        await post.remove()
        res.json({message: "Post deleted"})
    } else{
        res.status(400)
        throw new Error("Post not found")
    }
})


export  {createPost, getPosts, getSinglePost, updatePost, deletePost}