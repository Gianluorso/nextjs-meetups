import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Gianluca:a7bD1u90XV4flemD@meetup.azmvlot.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;

//"mongodb+srv://Gianluca:rhVIT23vfzMQ5peA@meetups.azmvlot.mongodb.net/?retryWrites=true&w=majority"
//"mongodb+srv://Gianluca:HmqMOObZuReyLsgQ@meetup.azmvlot.mongodb.net/?retryWrites=true&w=majority"
