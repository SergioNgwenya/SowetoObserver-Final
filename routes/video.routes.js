const video = require('../models/Video.model');
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
const imgUpload = require('../utility/videoUpload');

//Creating a POST endpoint
router.post('/api/video', multer.single("video"), (req, res)=>{
    var Video = new video();
    let new_video = new video({
        title:req.body.title,
        category:req.body.category,
        video:req.file.location,
    });
        new_video.save(err=>{
        if(err){console.log(err)}
        res.json({response:"Video created successfully"})
    });
});

//creating a GET video endpoint to get/retrive all information from DB
router.get('/api/video', (req, res, next)=>{
    //Function to get all video from a database that were created based on the UserSchema
    video.find({}, function(err, foundvideo){
        //used for checcking for errors
        if(err) return 

        next(err);
        //checking if the results have been retained.
        if (!foundvideo){
            return res.json({message:"No video found"})
        }
        res.json(foundvideo);
    });
    });

//Request for getting a single Users (GET single user)
router.get('/api/video/:id', function(req, res){
    video.findOne({_id:req.params.id}, function(err,foundvideo){
        if(err) return next(err);
        res.json(foundvideo);
    });
});

//Request for and deleting a video (GET single video)
router.delete('/api/video/:id', function(req, res){
    video.findByIdAndRemove({_id:req.params.id}, function(err,foundvideo){
        if(err){
            return next(err)
        }
        else {
            res.json({message: "Record deleted successfully"})
        }

        if (!foundvideo){
            return res.json({message: "No record found"})
        }
    });
});

//Creating an update request for the video using PUT
router.put('/api/video/:id', multer.single("video"), function(req,res,next){
    video.findById(req.params.id, function(err,foundvideo){
        if(err) return next(err);

        if(req.body.title){
            foundvideo.title = req.body.title;
        }
        if(req.body.category){
            foundvideo.category = req.body.category;
        }
        if(req.file.location){
            foundvideo.video = req.file.location;
        }
       
        foundvideo.save(function(err, updatedvideo){
            if (err) return next(err);
            let obj = {
                message:"Video updated successfully",
                updatedvideo: updatedvideo
            }
            res.json(obj)
        });
    });
});

module.exports = router;

