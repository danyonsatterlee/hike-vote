import React from "react";


class Hike extends React.Component{
    render(){
        return(
<div className="col-md-4 col-md-offset-1 hike">
<div className="col-md-3">
    <h4>{this.props.title} Fairy Falls</h4>
    <h4>{this.props.length} miles</h4>
    <h4>{this.props.difficulty} Easy</h4>
    <h4>State: {this.props.state} WY</h4>
    <h4>{this.props.park} Yellowstone</h4>
    </div>
    <div className="col-md-8 col-md-offset-1">
    <img src="{this.props.image"/>
    <h4>Description</h4>
    <p>it was a wonderful hike yadayadaydadyaydyasdlkjfa;lsdkjffadf
        asdlkfja;sldkfj
        asdlkjfa;lsdkjf;alskdjf;lasjd;fjas
        dfa;sldkjfiowe ndnvoiwe
        
    </p>
    <button>Up Vote</button>
 
    <button>Down Vote</button>

    <h4>What Other's are Saying</h4>
    <p>{this.props.downvotes}9</p>
      <p>{this.props.upvotes}283</p>
      </div>
    <button>Edit</button>
</div>


        );
    }
}

export default Hike;