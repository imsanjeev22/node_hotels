const express = require('express');
const router = express.Router();
const Person = require('../models/person'); 

router.post('/',async(req,res)=>{
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

router.get('/',async(req,res)=>{
    try{
        const data= await person.find();
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('err')
        res.status(500).json({error: 'internal server error'})
    }
})

router.get('/:workType',async(req,res)=>{
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

router.put('/:id', async (req, res) => {
    try {
      const personId = req.params.id; // Extract the person's ID from the URL parameter
      const updatedPersonData = req.body; // Updated data for the person
  
      // Assuming you have a Person model
      const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      });
  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Send the updated person data as a JSON response

      console.log('data updated')
       res.status(200).json(response);
    } catch (error) {
      console.error('Error updating person:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




  router.delete('/:id', async (req, res) =>{
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        //const updatedPersonData = req.body; // Updated data for the person
    
        // Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
          }
      
          console.log('data delete')

          res.status(200).json({message: "data deleted succesfully"});
       

    }catch(error){
        console.error('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
      }

  })
  
module.exports = router;