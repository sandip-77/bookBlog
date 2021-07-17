import mongoose from 'mongoose';
import dotenv from 'dotenv';
import posts from './data/posts.js';
import Post from './models/PostModel.js';
import connectDB from './db.js';
import colors from 'colors';
import asyncHandler from 'express-async-handler';

dotenv.config()
connectDB()

const importData = async() => {
    try {
        await  Post.deleteMany()
  
        await Post.insertMany(posts);
  
        console.log('Data imported'.green.inverse);
        process.exit()
      }catch(err){
          console.log(`${err}`.red.inverse);
      }
}


const destroyData = async() => {
    try {
        await  Post.deleteMany()
  
        console.log('Data destroyed'.green.inverse);
        process.exit()
      }catch(err){
          console.log(`${err}`.red.inverse);
      }
}


if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}