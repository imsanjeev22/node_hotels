const express = require('express');
const MenuItem = require('../models/menuItem');
const router = express.Router();
const menuItem=require('./../models/menuItem')

router.post('/',async(req,res)=>{
    try{

        const data=req.body
        const newItem =new menuItemenuItem(data)

        //save the new person to the database
       
                const response=await newItem.save()
                console.log('data saved')
                res.status(200).json(response)
    
            }
            catch(err){
                console.log(err)
                res.status(500).json({error: 'Internal server error'})
            }         
})
router.get('/',async(req,res)=>{
    try{
        const data= await menuItem.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('err')
        res.status(500).json({error: 'internal server error'})
    }
})
//comment added
module.exports = router;