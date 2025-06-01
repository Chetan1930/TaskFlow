const mongoose=require('mongoose');
const User= require('../models/user');
const routes= require('express').Router();
const control = require('../controller/authController');


routes.post('/register',control.register);

routes.post('/login',control.login);


module.exports = routes;


