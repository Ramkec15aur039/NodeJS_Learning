let MongoDBClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/sampledb';

//To create DB connection
MongoDBClient.connect(url, (err, db) =>{
    if(err) throw err;
    console.log("DB created successfully!!!");
    db.close();
})