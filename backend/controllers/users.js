const User = require('../models/user')
const jwt = require('jsonwebtoken')
const aws = require('aws-sdk')
const fs = require('fs')
const path = require("path");
aws.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY})
const s3Bucket = new aws.S3({ params: { Bucket: process.env.AWS_BUCKET}})
const BASE_URL = `https://${process.env.AWS_BUCKET}.s3.ca-central-1.amazonaws.com`


async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        const token = createJWT(user);
        res.status(200).json(token)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function signup(req, res) {
    try {
        const user = await User.create(req.body).catch(err => console.log(err));
        const token = createJWT(user);
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}


function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
}

function checkToken(req, res) {
    res.json(req.exp);
}

async function index(req, res) {
    try {
        if (req.user) res.status(200).json(await User.find({ _id: { $ne: req.user._id } }))
        else res.status(200).json(await User.find({}))
        } catch(err) {
        res.status(400).json(err)
    }
}

async function updateBioLinks(req, res) {
    try {
        let user = await User.findById(req.user._id)
        for (let key in  req.body) user[key] = req.body[key]
        user.save()
        res.status(200).json(user)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function addProject(req, res) {
    try {
        req.body.technologies = req.body.technologies.split(',')
        let user = await User.findById(req.user._id)
        user.projects.push(req.body)
        user.save()
        res.status(200).json(user)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function uploadPhoto(req, res) {
    try {
        const user = await User.findById(req.user._id)
        user.pic = `${BASE_URL}/${req.file.filename}.jpeg`
        user.save()
        uploadFileOnS3(`${req.file.filename}.jpeg`, fs.readFileSync(req.file.path), res, user)
        // deleteUploads()
    } catch (err) {
        res.status(400).json(err)
    }
}

function uploadFileOnS3(fileName, fileData, resp, user) {
    var params = {
      Key: fileName,
      Body: fileData,
    };
    s3Bucket.upload(params, function (err, res) {
      if (err) {
        console.log("Error in uploading file on s3 due to " + err);
      } else {
        console.log(`${fileName} successfully uploaded on Amazon S3`)
        deleteUploads()
        resp.status(200).json(user)
      }
    });
}

function deleteUploads() {
    const directory = "uploads/";
    
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
    
      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    });
}

module.exports = {
    login,
    signup,
    checkToken,
    index,
    updateBioLinks,
    addProject,
    uploadPhoto
}