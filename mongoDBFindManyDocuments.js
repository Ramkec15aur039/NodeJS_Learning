let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//To find many record (Get all)
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  dbName
    .collection("student")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
