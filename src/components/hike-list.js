import React from "react";
 import HikeContainer from "../containers/hike-container.js";

class HikeList extends React.Component{
    genHike(){
        return this.props.hike.sort((a,b)=>{
            return (b.upvotes-b.downvotes)-(a.upvotes-a.downvotes) 
        }).map((item,index)=>{
            return <HikeContainer handleDown={this.props.handleDown} handleUp={this.props.handleUp} key ={index+ item.title} hike={item} handleSave={this.props.handleSave} handleRemove={this.props.handleRemove}></HikeContainer>
        })
    }
    render(){
        return(
<div>
    {this.genHike()}
    
</div>

        );
    }
}

export default HikeList;