const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodedemo', {useNewUrlParser: true,useUnifiedTopology: true } )
.then(()=> console.log('Connecting to MongoDB...'))
.catch(err=>console.error('Could not connect to mongodb',err));

const courseSchema = new mongoose.Schema({

    name:String,
    author:String,
    tags:[String],
    date:{ type:Date, default:Date.now},
    isPublished:Boolean,
    price:Number
}); 


const Course =mongoose.model('Course',courseSchema);
   
async function getCourses(){
    return await Course
        .find({isPublished:true, tags:'backend'})
        .sort({name:1})
        .select({name:1,author:1})
        
}
async function run(){
const courses = await getCourses();
console.log(courses)    
}
run();