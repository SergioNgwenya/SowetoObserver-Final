const Category = require('../models/category.model');
const router = require('express').Router();

//Creating a POST endpoint
router.post('/api/category', (req, res)=>{
    var category = new Category();
    let new_category = new Category({
        name:req.body.name,
        description:req.body.description,
    });
        new_category.save(err=>{
        if(err){console.log(err)}
        res.json({response:"Created successfully"})
    });
});

//creating a GET category endpoint to get/retrive all information from DB
router.get('/api/category', (req, res, next)=>{
    //Function to get all category from a database that were created based on the UserSchema
    Category.find({}, function(err, foundCategory){
        //used for checcking for errors
        if(err) return next(err);
        //checking if the results have been retained.
        if (!foundCategory){
            return res.json({message:"No categories were found"})
        }
        res.json(foundCategory);
    });
    });

//Request for getting a single Users (GET single user)
router.get('/api/category/:id', function(req, res){
    Category.findOne({_id:req.params.id}, function(err,foundCategory){
        if(err) return next(err);
        res.json(foundCategory);
    });
});

//Request for and deleting a Category (GET single category)
router.delete('/api/category/:id', function(req, res){
    Category.findByIdAndRemove({_id:req.params.id}, function(err,foundCategory){
        if(err) return next(err);
            res.json(foundCategory);
        if (!foundCategory){
            return res.json({message: "No record found"})
        }
    });
});

//Creating an update request for the category using PUT
router.put('/api/category/:id', function(req,res,next){
    Category.findById(req.params.id, function(err,foundCategory){
        if(err) return next(err);

        if(req.body.name){
            foundCategory.name = req.body.name;
        }
        if(req.body.description){
            foundCategory.description = req.body.description;
        }
        foundCategory.save(function(err, updatedCategory){
            if (err) return next(err);
            let obj = {
                message:"Category updated successfully",
                updatedCategory: updatedCategory
            }
            res.json(obj)
        });
    });
});

module.exports = router;