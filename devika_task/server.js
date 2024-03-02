const express = require('express');
const bookRouter = require('./src/routes/bookRouter');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
res.status(200).json({
    message:"Hello World"
})
})

app.get('/api/user',(req,res)=>{
  const user ={
    name:"john",
    email:"john@gmail.com",
    age:"13",
    username:"devika",
    password:"1234"
  }
  res.status(200).json({
      data:user
      
  })
})


app.use('/api/book',bookRouter)
app.all('*', (req, res) => {
    return res.status(404).json({ 
        message: 'You have reached an invalid route.' 
    });
  });


app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});