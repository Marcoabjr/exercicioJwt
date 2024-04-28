import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        creatAt: {
            type: Date(),
            default: new Date()
        }
    },    
    
    {
        timestamp: true
    }
);

export default mongoose.model("user", userschema);

