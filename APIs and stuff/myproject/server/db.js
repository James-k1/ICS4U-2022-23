const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://User1:test@cluster0.kyjkkay.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    usNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected')).catch((err) => console.log(err));
