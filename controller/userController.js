const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function registeruser(req,res){
    try {
        const newUser = new User(req.body);
        result = await newUser.save()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
};

async function loginuser(req,res){
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).send({message: "User not found", success: false});
        }
        const token = jwt.sign({_id:user._id}, 'shriya', {expiresIn: '1h'});
        return res.status(200).send({user, token});
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = {registeruser, loginuser};
