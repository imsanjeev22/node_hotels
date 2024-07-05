const express = require('express');
const app = express();

const db = require('./db');
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const person=require('./models/person')
const Menu=require('./models/menuItem')
require('dotenv').config();

app.get('/', function(req, res) {
    res.send('Welcome to my hotel... How can I help you? We have a list of menus');
});

app.post('/person',async(req,res)=>{
    try{
    const data=req.body // assuming requist body contain the person data

    //create the new person document using monguse model
    const newPerson =new person(data)

    //save the new person to the database
   
            const response=await newPerson.save()
            console.log('data saved')
            res.status(200).json(response)

        }
        catch(err){
            console.log(err)
            res.status(500).json({error: 'Internal server error'})
        }       
    
})
app.get('/person',async(req,res)=>{
    try{
        const data= await person.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('err')
        res.status(500).json({error: 'internal server error'})
    }
})

app.get('/person/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType
        if(workType=='chef'||workType=='waiter'||workType=='manager'){
            const response=await person.find({work:workType})
            console.log('response fetched')
        res.status(200).json(response)
        }
        else{
            res.status(404).json({error: 'Invalid workType'})
        }
    }
    catch(err){
        console.log('err')
        res.status(500).json({error: 'internal server error'})
    }
})


app.post('/Menu',async(req,res)=>{
    try{

        const data=req.body
        const newItem =new Menu(data)

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
app.get('/Menu',async(req,res)=>{
    try{
        const data= await Menu.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('err')
        res.status(500).json({error: 'internal server error'})
    }
})

const personRoutes=require('./routes/personRoutes')
const menuItemRoutes=require('./routes/menuItemRoutes')

//use the router
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)


const PORT = process.env.PORT || 3000; 
/*const port = 3000;  */ // Change port number
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
