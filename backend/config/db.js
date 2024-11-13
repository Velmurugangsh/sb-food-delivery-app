import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://karthi:12345@check.xiq40.mongodb.net/SB-FOODS').then(()=>{
       console.log('DB connected') ;
    })
}