import  mongoose  from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags:[String],
    podcastAvailable: {
        type: Boolean,
        default: false
    },
    numViews: {
        type: Number,
        default: 0
    },
    comments: [{
        text: String,
        postedBy: String
    }]
}, { timestamps: true })


const Post = mongoose.model("Post", postSchema)

export default Post;