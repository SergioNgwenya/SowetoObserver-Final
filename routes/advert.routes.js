const Advert = require('../models/advert.model');
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
    router.post('/api/advert', multer.single("picture"), (req, res, next)=>{
        console.log(req.file)
            var advert = new Advert();
            let new_advert = new Advert({
                title:req.body.title,
                picture: req.file.location,
                url:req.body.url,
                });

                new_advert.category = [req.body.category];

                new_advert.save(err=>{
                if(err){console.log(err)}
                res.json({response:"New advert created"})
    });
});

//creating a GET articles endpoint to get/retrive all information from DB
router.get('/api/advert', (req, res,next)=>{
    //Function to get all articles from a database that were created based on the UserSchema
    
    Advert.find({}, function(err, foundAdvert){
        if(err) return next(err);
        if(!foundAdvert){
            return rse.json({message:"No advert found!"})
        }
        res.json(foundAdvert);
    });
});

//Request for getting a single advert (GET single article)
router.get('/api/advert/:id', function(req, res){
    Advert.findOne({_id:req.params.id}, function(err,foundAdvert){
        if(err) return next(err);
        res.json(foundAdvert);
    });
});


//Request for deleting an advert (single article)
router.delete('/api/advert/:id', function(req, res){
    Advert.findByIdAndRemove({_id:req.params.id}, function(err,foundAdvert){
        if(err) return next(err);
        res.json({res: "Advert deleted"});
    });
});

//Creating an update request using PUT
router.put('/api/advert/:id', multer.single("picture") ,function(req,res,next){
    Advert.findById(req.params.id, function(err,foundAdvert){
        if(err) return next(err);
        if(req.body.title){
            foundAdvert.title = req.body.title;
        }
        if(req.file.location){
            foundAdvert.picture = req.file.location;
        }
        if(req.body.url){
            foundAdvert.url = req.body.url;
        }        

        foundAdvert.save(function(err, updatedAdvert){
            if (err) return next(err);
            let obj = {
                massege:"Advert updated successfully",
                updatedAdvert: updatedAdvert
            }
            res.json(obj)
        });
    });
});
module.exports = router;