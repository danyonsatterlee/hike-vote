import React from "react";
let FontAwesome = require('react-fontawesome');
class Hike extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-md-offset-1 hike">
                <div className="col-md-3">
                    <h4>{this.props.hike.title}
                    </h4>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.title}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("title", event);
                    }}/>
                    <h4>{this.props.hike.length}
                    </h4>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.length}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("length", event);
                    }}/>
                    <h4>{this.props.hike.difficulty}
                    </h4>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.difficulty}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("difficulty", event);
                    }}/>
                    <h4>State: {this.props.hike.state}
                    </h4>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.state}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("state", event);
                    }}/>
                    <h4>{this.props.hike.park}
                    </h4>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.park}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("park", event);
                    }}/>
                </div>

                {/*SECOND HALF OF DIV*/}
                        {/*EDIT BUTTON*/}
                <FontAwesome
                    onClick={() => {
                    this
                        .props
                        .handleEdit()
                }}
                    className='pull-right'
                    name='pencil-square-o'
                    size='2x'
                    style={{
                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                }}/>
                {/*SAVE BUTTON*/}
                <div className="col-md-8 col-md-offset-1">
                    <FontAwesome
                        onClick={() => {
                        this
                            .props
                            .handleSave(this.props.hike._id, this.props.input);
                        this
                            .props
                            .handleEdit()
                    }}
                    classname="pull-right"
                        name='floppy-o'
                        size='2x'
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}/>
                    {/*IMAGE*/}
                    <img className="hike-pic" src={this.props.hike.image}/>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.image}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("image", event);
                    }}/>
                    {/*DESCRIPTION*/}
                    <h4>Description</h4>
                    <p>{this.props.description}
                    </p>
                    <input
                        style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                        value={this.props.input.description}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("description", event);
                    }}/>

                    {/*UPVOTE BUTTON*/}
                    <button
                        onClick={() => {
                        this
                            .props
                            .handleUp(this.props.hike._id)
                    }}>Up Vote</button>
                    {/*DOWNVOTE BUTTON*/}
                    <button
                        onClick={() => {
                        this
                            .props
                            .handleDown(this.props.hike._id)
                    }}>Down Vote</button>

                    <h4>What Other's are Saying</h4>
                    <p>Rank {this.props.hike.upvotes-this.props.hike.downvotes}</p>
                   
                </div>

 

      
                {/*REMOVE BUTTON*/}
                <button
                classname="remove-btn"
                 style={{
                        display: this.props.input.edit
                            ? "inherit"
                            : "none"
                    }}
                    onClick={() => {
                    this
                        .props
                        .handleRemove(this.props.hike._id) 
                }}>Remove</button>
            </div>

        );
    }
}

export default Hike;