const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const conn = {
  isConnected: false
}

const existe = 1
const conectarDB = async () => {
  try {
    if(conn.isConnected) return
   const db = await mongoose.connect(MONGO_URI);
     conn.isConnected = existe
   console.log('funciona eres muy crack')
  } catch (error) {
    console.error(error);
  }
};

export default conectarDB;
