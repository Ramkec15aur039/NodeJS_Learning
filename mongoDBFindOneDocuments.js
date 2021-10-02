let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//To find one record (get)
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  dbName.collection("student").findOne({}, (err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
