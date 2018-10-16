const Advert = require('../models/advert.model');
const router = require('express').Router();
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage()
});
const imgUpload = require('../utility/imgUpload');

//Creating a POST endpoint
    router.post('/api/advert', multer.single("picture"), imgUpload.uploadToGcs, (req, res, next)=>{

    var advert = new Advert();
    let new_advert = new Advert({
        title:req.body.title,
        url:req.body.url,
        });

        // new_advert.category = [req.body.category];

        new_advert.save(err=>{
        if(err){console.log(err)}
        res.json({response:"New advert created"})
    });
});

//creating a GET advert endpoint to get/retrive all information from DB
// router.get('/api/advert', (req, res,next)=>{
//     //Function to get all advert from a database that were created based on the UserSchema
//     Advert.find()
//     .populate('category')
//         //used for checcking for errors
//      .exec((err,advert)=>{;
//         //checking if the results have been retained.
//         if (err) return next(err);
//         res.json(advert);
//     });
// });

//Request for getting a single advert (GET single article)
router.get('/api/advert/:id', (req, res) => {
    Advert.findOne({_id:req.params.id}, (err,foundAdvert) => {
        if(err) return next(err);
        res.json(foundAdvert);
    });
});

router.get('/api/advert/q', (req, res) => {
    Advert.find({_id:req.params.id}, (err,foundAdvert) => {
        if(err) return next(err);
        res.json(foundAdvert);
    });
});

//Request for and deleting an Advert 
router.delete('/api/advert/:id', (req, res) => {
    Advert.findByIdAndRemove({_id:req.params.id}, (err,foundAdvert)=>{
        if(err) return next(err);
        res.json(foundAdvert);
    });
});

//Creating an update request for the category using PUT
router.put('/api/advert/:id', (req,res,next) => {
    Article.findById(req.params.id, (err,foundAdvert) => {
        if(err) return next(err);
        if(req.body.title){
            foundAdvert.title = req.body.title;
        }
        if(req.url.url){
            foundAdvert.url = req.url.url;
        }
        foundAdvert.save((err, updatedAdvert) => {
            if (err) return next(err);
            let obj = {
                message:"advert updated successfully",
                updatedAdvert: updatedAdvert
            }
            res.json(obj)
        });
    });
});
module.exports = router;