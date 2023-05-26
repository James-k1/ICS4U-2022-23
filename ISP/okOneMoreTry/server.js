const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express();

 app.use(bodyParser.urlencoded({
     extended:false
}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))

// app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    // return res.send("<h1>test</h1>")
})

//connect mongodb
const connectionString = require('./config/keys').mongoURI;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
}).then(() => console.log('DB connected')).catch((err) => console.log(err))


//user routes
const users = require('./routes/api/users')
app.use('/api/users', users)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
