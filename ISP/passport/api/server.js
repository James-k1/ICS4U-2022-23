if(process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
let passport = require('passport')
const init = require('./passportConfig')
const session = require('express-session')
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

init(passport, 
    (email) => {return users.find(user => user.email === email)}, 
    (id) =>{return users.find(user => user.id === id)} 
)
//replace with mongo call
users = []

//ejs might be useless
// app.set('view-engine', 'ejs')
app.use(express.json())

let allowList = ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173']
let corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    if (allowList.indexOf(req.header('Origin')) != -1){
        corsOptions = {origin : true}
    }else{ 
        corsOptions = {origin : false}
    }
    callback(null, corsOptions)
}


app.use(cors(corsOptionsDelegate))
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false

}))
app.use(require('cookie-parser')());
app.use(passport.initialize())
app.use(passport.session())

router.get('/', ensureAuthenticated, function(req, res) {
    if (req.user && req.user.role==='student'){
            Lab.find().sort('-_id')
                .then(function (doc) {
                res.render('indexStudent', { name: req.user.name, items: doc});
        });

} else if (req.user && req.user.role==='teacher'){
            Lab.find().sort('-_id')
                    .then(function (doc) {
                    res.render('indexTeacher', { name: req.user.name, items: doc});
    });
}

else if (req.user && req.user.role==='admin'){
            Lab.find().sort('-_id')
                .then(function (doc) {
                res.render('indexAdmin', { name: req.user.name, items: doc, n: 0});
            });
    }
});




app.post('/register', async (req,res) => {

    try{
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        users.push({
            id: uuid.v4(),
            email: req.body.email,
            password: hashedPassword
        })

        res.send(true)
        
    }catch{
        res.send(false)
    }
})

app.get('/users', (req,res) => {
    
    res.send(users)
})


app.post('/login', passport.authenticate('local',{failureRedirect: '/fail', failureMessage: false}), function (req,res){
   //do stuff
}
)
// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next()
//     }
  
//     res.redirect('/login')
// }

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else{
        res.redirect('/users/login')
    }
}

app.listen(3000)