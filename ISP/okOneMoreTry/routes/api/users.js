const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('../../model/User')


//register router
router.post('/register', async (req, res) => {
    //confirm password does not exist yet 
    let {name, age, address, email, password, confirmPassword} = req.body
    //passwords match
    if(password !== confirmPassword){
        return res.status(400).json({
           msg: "Passwords do not match." 
        })
    }

    // User.findOne({email: email}).then(email => {
    //     if (email){
    //         return res.status(400).json({
    //             msg: "Email is already registered." 
    //          })
    //     }
    // })
    
    let isDup = await User.findOne({email: email}).then(email => {
        return email
    })
    if(isDup){
        return res.status(400).json({
            msg: "Email is already registered." 
         })
    }
    
    const empty = null
    const perms = false
    let newUser = new User({
        name,
        age,
        address,
        perms,
        perms,
        perms,
        empty,
        password,
        email,
        empty
    })
    //passwordHash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if (err) throw err;
            newUser.password=hash 
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Registration successful."
                })
            })
        })
    })

})

module.exports = router
