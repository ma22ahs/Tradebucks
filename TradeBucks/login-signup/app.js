const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
}); 

app.post ("/", (req,res) => {
   res.render('login');
});

app.get('/signup', (rep,res) => {
  res.render ('signup');
})



app.get('/login', (req,res ) => {
    res.render('login');
});


app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;



  // Check if username and password are correct
  if (email === 'admin@email.com' && password === 'admin') {
    res.render('dashboard');
  } else {
   var alert = ("invalid user name or password")
   res.send(alert)
    console.log(password);
  }
  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
