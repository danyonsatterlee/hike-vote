let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let voteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
     location:{
         type:String,
         required:true
     }, 
     difficulty: String,
     state: {
         type: String,
         required: true
        },
     park: String,
     image: String,
     directions:{
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