let express = require("express");
let voteRouter = express.Router();

//import model
let Vote = require("../models/votes.js");
//middleware to put all queries to lowercase
voteRouter.use((req,res,next)=>{
    for( let key in req.query){
        if(typeof req.query[key]==="string"){
            req.query[key]=req.query[key].toLowerCase()
        }
    }
    next();
});

// GET ALL
voteRouter.get("/", (req,res)=>{
   
       Vote.find(req.query, (err, data) => {
           console.log("called")
 if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else {
      res.status(200).send({"message": "Success here is your data", data});
    }
  });
});
//GET BY ID
voteRouter.get("/:_id", (req,res)=>{
    Vote.findOne({"_id": req.params._id}, (err, data)=>{
        if(err){
            res.status(500).send({"message": "Error within server", err});
        } else{
            res.status(200).send({"message": "Success here is your data", data})
        }
    });
});

// CREATE
voteRouter.post("/", (req,res)=>{
    let newVote = new Vote(req.body);
    newVote.save((err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within the server", err});
        } else{
            res.status(200).send({"message": "Success here is your data", data})
        }
    });
});


//UPDATE
voteRouter.put("/:_id", (req, res)=>{
  
    Vote.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err,data)=>{
        if(err){
            res.status(500).send({"message":" Error within server", err});
        } else if(data===null){
            res.status(404).send({"message": "Not found"});
        } else{
            res.status(200).send({"message": "Success you made an update!"});
        }
    });
});


// DELETE

voteRouter.delete("/:_id", (req, res)=>{
   Vote.findByIdAndRemove(req.params._id, (err,data)=>{
       if(err){
           res.status(500).send({"message": "Error within server", err});
       } else if(data===null){
           res.status(404).send({"message": "Not Found"});
       } else{
           res.status(200).send({"message": "Success your data has been deleted"});
       }
   });
});

voteRouter.put("/upvote/:_id", (req,res)=>{
    Vote.findOne({"_id": req.params._id}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error on server", err});
        } else if(data===null){
            res.status(404).send({"message": `Item with id of ${req.params._id} was not found`})
        } else{
            data.upvotes +=1;
            data.save((err, data)=>{
                if(err){
                    res.status(500).send({"message": "Error on server", err});
                } else{
                    res.status(200).send({"message": "Success your data has been updated", data});

                }
            });

        }
    })

});

voteRouter.put("/downvote/:_id", (req,res)=>{
        Vote.findOne({"_id": req.params._id}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error on server", err});
        } else if(data===null){
            res.status(404).send({"message": `Item with id of ${req.params._id} was not found`})
        } else{
            data.downvotes +=1;
            data.save((err, data)=>{
                if(err){
                    res.status(500).send({"message": "Error on server", err});
                } else{
                    res.status(200).send({"message": "Success your data has been updated", data});

                }
            });

        }
    })
});

module.exports = voteRouter;