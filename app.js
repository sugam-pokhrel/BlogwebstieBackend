const  express=require('express');
const body_parser=require('body-parser');
const { urlencoded } = require('body-parser');
// const Blog=require('./mongoose')
//this is an ongoing project of blog website

//the above are all the backend components

const app=express();



const mongoose=require('mongoose');
const date=new Date().toDateString();

mongoose.connect('mongodb://127.0.0.1:27017/Blog',{useNewUrlParser:true});

const Blog = mongoose.model('Blog', { title: String, content:String,user:String,uploadDate:String});



app.use(body_parser.urlencoded({extended:true}));
app.get('/',(req,res)=>{res.send('hello')});
app.get('/:name',(req,res)=>{
    res.send("Hello" + " " +req.params.name);
})

app.listen(3000,()=>{
    console.log('server started');
});

app.post('/upload',(req,res)=>{
   
    const post=new Blog({title:req.body.title,content:req.body.content,user:req.body.user,uploadDate:date});

    post.save().then(() => console.log('meow'));
    res.send("Saved")


})
