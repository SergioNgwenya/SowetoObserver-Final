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
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
});

//Creating a POST endpoint
router.post('/api/articles', multer.single("picture"), (req, res, next) => {

    let new_article = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        category: req.body.category,
        picture: req.file.location,
    });

    new_article.save(err => {
        if (err) { console.log(err) }
        res.json({ response: "New article created" })
    });
});

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/api/articles', (req, res, next) => {
    //Function to get all articles from a database that were created based on the UserSchema
    Article.find()
        .populate('category')
        //used for checcking for errors
        .exec((err, article) => {
            ;
            //checking if the results have been retained.
            if (err) return next(err);
            // return res.json({message:"No Article were found"})
            res.json(article);
        });
});

//Request for getting a single article (GET single article)
router.get('/api/articles/:id', function (req, res) {
    Article.findOne({ _id: req.params.id }, function (err, foundArticle) {
        if (err) return next(err);
        res.json(foundArticle);
    });
});

router.get('/api/articles/q', function (req, res) {
    Article.find({ _id: req.params.id }, function (err, foundArticle) {
        if (err) return next(err);
        res.json(foundArticle);
    });
});

//Request for and deleting an article (by single article)
router.delete('/api/articles/:id', function (req, res) {
    Article.findByIdAndRemove({ _id: req.params.id }, function (err, foundArticle) {
        if (err) return next(err);
        res.json(foundArticle);
    });
});

//Creating an update request for the category using PUT
router.put('/api/articles/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, foundArticle) {
        if (err) return next(err);
        if (req.body.title) {
            foundArticle.title = req.body.title;
        }
        if (req.body.body) {
            foundArticle.body = req.body.body;
        }
        foundArticle.save(function (err, updatedArticle) {
            if (err) return next(err);
            let obj = {
                message: "Article updated successfully",
                updatedArticle: updatedArticle
            }
            res.json(obj)
        });
    });
});
module.exports = router;