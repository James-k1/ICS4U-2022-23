const mongoose = require('mongoose')

// const Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema({
    // _id: {
    //     //type: Schema.Types.ObjectId
    // },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    isUser: {
        type: Boolean
    },
    isBusiness: {
        type: Boolean
    },
    isAdmin: {
        type: Boolean
    },
    profile_picture: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    products: [
        {
            type: Object
        }
    ]
});

const users = mongoose.model("users", usersSchema, "users");

module.exports = users;