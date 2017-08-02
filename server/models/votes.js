let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let voteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
     length:{
         type:Number,
         required:true
     }, 
     difficulty: String,
     state: {
         type: String,
         required: true
        },
     park: String,
     image: String,
     location:{
         type:String,
         required: true
        },
        description:{
         type:String,
         required: true
        },
        upvotes:{
            type:Number,
            default:0
        },
        downvotes:{
            type:Number,
            default:0
        }



 
});

module.exports =  mongoose.model("votehike", voteSchema);