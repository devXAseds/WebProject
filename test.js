const express=require('express')
const fs =require('fs')
const app=express()
const mysql=require('mysql')
const bodyParcel=require('body-parser')
const cors=require('cors')

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    connectionLimit:10,
    insecureAuth : true
})

app.use(bodyParcel.urlencoded({extended:true}))
app.use(cors());
app.use(express.json())


app.listen(3002,()=>{
    console.log('ruuuuun');
})

// app.get('/',(req,res)=>{
//     db.query(`select * from hollywood.film`,(err, result)=>{
//         if(err) return err;
//         res.send(result)
//     })
// })

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
     console.log(req);
});

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/style.css')
})

app.get('/index.js',(req,res)=>{
    res.sendFile(__dirname+'/index.js')
})

app.get('/index.js',(req,res)=>{
    res.sendFile(__dirname+'/index.js')
})

app.get('/res/restaurant.png',(req,res)=>{
    res.sendFile(__dirname+'/res/restaurant.png')
})
app.get('/res/menu.png',(req,res)=>{
    res.sendFile(__dirname+'/res/menu.png')
})
app.get('/res/header.jpeg',(req,res)=>{
    res.sendFile(__dirname+'/res/header.jpeg')
})
app.get('/res/table.jpeg',(req,res)=>{
    res.sendFile(__dirname+'/res/table.jpeg')
})


app.get('/hello',(req,res)=>{
    db.query(`select * from music.music`,(err, result)=>{
        if(err) return err;
        res.send(result)
    })
})

app.post('/',(req,res)=>{
    console.log(req.body);

})
