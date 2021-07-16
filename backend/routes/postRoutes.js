import express from 'express'
import { createPost, deletePost, getPosts, getSinglePost, updatePost } from '../controllers/postController.js'


const router = express.Router()

router.route('/').post(createPost).get(getPosts)
router.route('/:id').get(getSinglePost).put(updatePost).delete(deletePost)


export default router;
