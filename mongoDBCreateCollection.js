let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//To create collection
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  dbName.createCollection("student", (err, result) => {
    if (err) throw err;
    console.log("Collection created successfully!!!");
    db.close();
  });
});
