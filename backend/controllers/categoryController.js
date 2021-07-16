import asyncHandler from 'express-async-handler';
import Category from '../models/CategoryModel.js';


// create a categroy 
// routes POST / api/categories/

const createCategory = asyncHandler(async(req, res) => {
    const category = new Category({
        category: req.body.category
    })

    const createdCategory = await category.save();
    res.status(201).json(createdCategory)

})

export  {createCategory}