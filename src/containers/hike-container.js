import React from "react";
import Hike from "../components/hike.js";
import autoBind from "react-autobind";
class HikeContainer extends React.Component{
           constructor(props){
        super(props);
        this.state={
   ...this.props.hike,
   edit:false
        },
         autoBind(this);
    }

    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }
     toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render(){
        return(
<Hike input={this.state} handleUp={this.props.handleUp} handleEdit={this.toggleEdit} handleChange={this.handleChange} handleDown={this.props.handleDown}  hike={this.props.hike} handleSave={this.props.handleSave} handleRemove={this.props.handleRemove}></Hike>

        );
    }
}

export default HikeContainer;