import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import mongoose from 'mongoose';
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes);
const PORT = 8000;
Connection();
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
// email packages




// const cors = require("cors");
// const express = require("express");
// const mongoose = require('mongoose');

// const app = express();

// const User = require("../model/user");
import User from '../server/model/user.js'

// const PORT = 4000;
const hostname = "localhost";
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded(true));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://student:ds1234@miniproject.4aivoee.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database")
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/login", async (req, res) => {
    console.log("login")
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const findUser = await User.find({ email: email });
        if (!findUser[0]) {
            return res.send("0");
        }
        else if (findUser[0].password === password) {
            return res.send("1");
        }
        else {
            return res.send("0");
        }
    } catch (err) {
        console.log(err)
    }
})

app.post("/register", async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    try {
        await User.create({'name': name, 'email': email, 'password': password });
    }
    catch (err) {
        console.log(err)
        res.send("0")
    }
    res.send("1")

})