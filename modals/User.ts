import * as mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        serial:{
            type:String,
            required:true,
            unique:true
        },
        timestamp:{
            type:Date,
            default:Date.now()
        }
    }
)

const Client = mongoose.models.Client || mongoose.model("Client",ClientSchema);
export default Client;