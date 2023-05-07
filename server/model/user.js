import mongoose from "mongoose";
// const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        min: 3,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        min: 3,
        max: 20,
    }

})

const User = mongoose.model("Users", userSchema);
export default User;