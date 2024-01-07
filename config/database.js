import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const dbConnect =() => {
   mongoose.connect(process.env.DATABASE_URL,{
       useNewUrlParser:true,
       useUnifiedTopology:true,
    })
   .then(() => console.log("DB CONNECT IS SUCCESS"))
   .catch((error) => {
       console.log("issue in DB");
       console.log(error.message);
       process.exit(1);
   })
}

export default dbConnect;