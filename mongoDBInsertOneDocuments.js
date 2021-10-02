let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//To insert one record
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  dbName
    .collection("student")
    .insertOne({ name: "Ram", DOB: "05/09/1997", place: "Tiruppur" }, (err, result) => {
      if (err) throw err;
      console.log("Document inserted successfully!!!");
      db.close();
    });
});
