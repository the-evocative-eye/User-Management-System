const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');//inbuilt-module//
const connectDB=require('./server/database/connection');
const app=express();
dotenv.config({path:'config.env'})//so as to make it listen to port other than default port
const PORT=process.env.PORT || 8080 // it is the function to listen to respective port0
app.use(morgan('tiny'));
connectDB();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/img',express.static(path.join(__dirname,'public/img')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
//by giving these paths one need not to spcify entire path of files wherever required//
app.use('/',require('./server/routes/router'));
app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});