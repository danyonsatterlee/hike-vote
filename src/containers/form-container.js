import React from "react";
import Form from "../components/form.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";

class FormCon extends React.Component{
    constructor(){
        super();
        this.state={
            title: "",
            location: "",
            difficulty: "",
            state:"",
            park: "",
            image: "",
            directions: "",
            description: "",
            length: "",
            
        }
         autoBind(this);
    };
   
    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }  


 render(){
        return(
            <Form input={this.state} handleClick={this.props.addData} handleChange={this.handleChange}></Form>

        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

// tell it how to turn actions into functions that can be called in react via
// props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCon);