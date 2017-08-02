import React from "react";
 import HikeContainer from "../containers/hike-container.js";

class HikeList extends React.Component{
    // genHike(){
    //     return this.props.hike.map((item,index)=>{
    //         return <HikeContainer></HikeContainer>
    //     })
    // }
    render(){
        return(
<div>
    {/*{this.genHike()}*/}
    <HikeContainer></HikeContainer>
</div>

        );
    }
}

export default HikeList;