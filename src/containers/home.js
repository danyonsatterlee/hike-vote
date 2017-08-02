import React from "react";
import HikeListCon from "./hike-list-container.js";
import FormCon from "./form-container.js";
import Header from "./header.js";

class Home extends React.Component{
    render(){
        return(
<div>
    <Header></Header>
    <FormCon></FormCon>
    <HikeListCon></HikeListCon>
</div>
        );
    }
}

export default Home;