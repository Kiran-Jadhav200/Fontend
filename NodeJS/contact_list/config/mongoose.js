//require the libary 

const mongooes = require('mongoose');

//connect to the database
mongooes.connect('mongodb://localhost/contact_list_db');

//acquire the connection (to check if it sussessful)
const db = mongooes.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print message
db.once('open',()=>{
    console.log('connected to database');
})