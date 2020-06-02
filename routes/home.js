const express=require('express');
const router=express.Router()

const home =require("../models/home");
router.get('/',home.home);
router.post('/action',require('../models/action'));
router.get('/delete',require('../models/delete'));

module.exports=router;
