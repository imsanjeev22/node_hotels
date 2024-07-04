const mongoose=require('mongoose')

//Define the mongoDB connection URL
const mongoURL='mongodb://localhost:27017/Hotel'

//setup mangoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})

const db=mongoose.connection;

//define event listner for database
 db.on('connected', ()=>{
    console.log("Connected to MongoDB server")
 });
 db.on('error',(err)=>{
    console.error("MongoDB connection errer",err)
 });
 db.on("disconnected",()=>{
    console.log("Disconnected to mongoDB server")
 });

 module.exports=db