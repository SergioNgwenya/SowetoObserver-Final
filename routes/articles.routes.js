const Article = require('../models/article.model');
const router = require('express').Router();
const Multer = require('multer');
const multers3 = require('multer-s3');
const secret = require('../config/secret');
const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId: secret.aws_id,
    secretAccessKey: secret.aws_secret
});
const multer = Multer({
    storage: multers3({
         s3: s3,
         bucket: 'sowetoobserver',
         acl: "public-read",
         metadata: (req, file, cb) => {
             cb(null, {fieldName: file.fieldname})
         },
         key: (req, file, cb)=>{
             cb(null, file.originalname)
         }
    })
});
const imgUpload = require('../utility/imgUpload');

//Creating a POST endpoint
    router.post('/api/articles', multer.single("picture"), (req, res, next)=>{
        console.log(req.file)
            var article = new Article();
            let new_article = new Article({
                
                title:req.body.title,
                body:req.body.body,
                author:req.body.author,
                category:req.body.category,
                picture: req.file.location,
                });
                
                new_article.category = [req.body.category];

                new_article.save((err, next)=>{
                if(err){ return next(err)};
                res.json({response:"New article created"})
    });
});

// var storage = Multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, '/images')
//     },
//     filename: function (req, res, cb){
//         cb(null, this.filename + '-' + Date.now())
//     }
// });

// var upload = Multer({storage: storage}).single('pic')

// router.post('/api/articles', (req, res) =>{
//     upload(req, res, function (err){
//         if(err){
//             //error
//         }
//         //else
//     })
// });

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/api/articles', (req, res,next)=>{
    //Function to get all articles from a database that were created based on the UserSchema
    // Article.find({}, function(err, foundArticle){
        
    //     if(err) return next(err);
    //     if(!foundArticle){
    //         return rse.json({message:"No articles found!"})
    //     }
    //     res.json(foundArticle);
    // });
    Article.find()
    .populate("category")
    .sort({createdAt:-1})
    .exec((err, article)=>{
        if(err){ return next(err)}
        res.json(article)
    }
    )
    
    // Article.find()
    // .populate('category')
    //     //used for checcking for errors
    //  .exec((err,article)=>{;
    //     //checking if the results have been retained.
    //     if (err) return next(err);
    //     // return res.json({message:"No Article were found"})
    //     res.json(article);
    // });
});

//Request for getting a single article (GET single article)
router.get('/api/articles/:id', function(req, res){
    Article.findOne({_id:req.params.id}, function(err,foundArticle){
        if(err) return next(err);
        res.json(foundArticle);
    });
});

//Get all articles only for a specific category
router.get('/api/articles/category/:id', function(req, res){
    Article.find({category:req.params.id}, function(err, foundArticle){
        if(err) return next(err);
        res.json(foundArticle);
    });
});

// router.get('/api/articles/q', function(req, res){
//     Article.find({_id:req.params.id}, function(err,foundArticle){
//         if(err) return next(err);
//         res.json(foundArticle);
//     });
// });

//Request for and deleting an article (by single article)
router.delete('/api/articles/:id', function(req, res){
    Article.findByIdAndRemove({_id:req.params.id}, function(err,foundArticle){
        if(err) return next(err);
        res.json({res: "Article deleted"});
    });
});

//Creating an update request for the category using PUT
router.put('/api/articles/:id', multer.single("picture") ,function(req,res,next){
    Article.findById(req.params.id, function(err,foundArticle){
        if(err) return next(err);
        if(req.body.title){
            foundArticle.title = req.body.title;
        }
        if(req.body.body){
            foundArticle.body = req.body.body;
        }
        if(req.body.status){
            foundArticle.status = req.body.status;
        }
        if(req.body.category){
            foundArticle.category = req.body.category;
        }
        if(req.file.location){
            foundArticle.picture = req.file.location;
        }
        if(req.body.author){
            foundArticle.author = req.body.author;
        }

        foundArticle.save(function(err, updatedArticle){
            if (err) return next(err);
            let obj = {
                massege:"Article updated successfully",
                updatedArticle: updatedArticle
            }
            res.json(obj)
        });
    });
});
module.exports = router;