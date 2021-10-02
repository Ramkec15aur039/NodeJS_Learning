let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";


/* 
To filter records
==================
.find({name: "Ram"}, { projection: { _id: 0, place: 0 } }) 
    -> {name: "Ram"} - Filter records with name. Likewise, we can filter records with any fields
    -> projection: {_id: 0} - Means, remove '_id' field and show records. Likewise, we can remove 
       and show/remove the required fields in the record. 
*/
MongoDBClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbName = db.db("sampledb");
  dbName
    .collection("student")
    .find({ name: "Ram" }, { projection: { _id: 0, place: 0 } })
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
