// const aws = require('aws-sdk');
// aws.config.region = 'eu-west-3';
// const secret = require('../config/secret');

// var fileStorage = {};

// fileStorage.fileUpload = (req, res, next) => {
//     if (req.file) {
//         const s3 = new aws.S3({
//             accessKeyId: secret.aws_id,
//             secretAccessKey: secret.aws_secret
//         });
//         const fileType = req.file.mimetype;
//         const fileName = req.file.originalname;

//         const s3Params = {
//             Bucket: secret.bucket_name,
//             Key: fileName,
//             Expires: 60,
//             ContentType: fileType,
//             ACL: 'public-read'
//         };

//         s3.getSignedUrl('putObject', s3Params, (err, data)=>{
//             if(err){
//                 console.log(err);
//                 return next(err);
//             }
//             console.log(data);
//             const returnData = {
//                 signedRequest: data,
//                 url: `https://${secret.bucket_name}.s3.amazonaws.com/${fileName}`
//             };
//             req.file.fileObject = returnData;
//             next();
//         });
//     }

// }

// module.exports = fileStorage;