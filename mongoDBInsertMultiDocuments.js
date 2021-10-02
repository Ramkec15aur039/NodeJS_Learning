let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

//To insert multiple record
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  let multiData = [
    { name: "Ram", DOB: "05/09/1997", place: "Tiruppur" },
    { name: "Hari", DOB: "01/01/2000", place: "Tiruppur" },
    { name: "Tamil", DOB: "02/10/2000", place: "Tiruppur" },
  ];
  dbName
    .collection("student")
    .insertMany(
      multiData,
      (err, result) => {
        if (err) throw err;
        console.log("Document inserted successfully!!!");
        db.close();
      }
    );
});
