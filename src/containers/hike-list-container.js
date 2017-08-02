import React from "react";
import HikeList from "../components/hike-list.js"
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
class HikeListCon extends React.Component{
    componentWillMount(){
        this.props.loadData();
    }
    render(){
        return(
<HikeList hike={this.props.hike} handleDown={this.props.downVote} handleUp={this.props.upVote} handleSave={this.props.editData} handleRemove={this.props.deleteData}></HikeList>

        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }

 // tell it how to turn actions into functions that can be called in react via props
 const mapDispatchToProps =(dispatch) => {
     return bindActionCreators(actionCreators,dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(HikeListCon);