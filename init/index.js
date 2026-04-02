const mongoose= require("mongoose");
const initData = require("./data.js");

//const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";
const MONGO_URL ="mongodb+srv://delta-student:DsGhuujEBOYlw5s9@cluster0.tafwnjl.mongodb.net/wanderlust?retryWrites=true&w=majority";
const Listing = require("../models/listing.js");
const dns =require("dns");
dns.setServers(['1.1.1.1', '8.8.8.8']);
main()
.then(()=>{
    console.log("connected to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
       ...obj,
        owner:"69cde504b4462e96679c2d95"
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
    // console.log("deletion is successful")
}

initDB();
