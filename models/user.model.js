const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        id:{type:Number,required:true},
        first_name:{type:String, required:true},
        last_name : {type: String, required:true},
        mobile : { type : Number, required : true},
        email : { type : String, required: true},
        location_type:{type : Number, required: false },
        location_string : { type : String, required: false},
        status : { type : Number, required: false}
    }
)

module.exports = mongoose.model("user",UserSchema)