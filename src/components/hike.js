import React from "react";

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
                <div className="col-md-8 col-md-offset-1">
                    <img className="hike-pic"src={this.props.hike.image}/>
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
                    <h4>Description</h4>
                    <p>{this.props.description} </p>
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
                    <button onClick={()=>{ this.props.handleUp(this.props.hike._id)}}>Up Vote</button>

                    <button onClick={()=>{ this.props.handleDown(this.props.hike._id)}}>Down Vote</button>

                    <h4>What Other's are Saying</h4>
                    <p>Down Votes {this.props.hike.downvotes}</p>
                    <p > Up Votes: {this.props.hike.upvotes}</p>
                </div>
                <button
                    onClick={() => {
                    this
                        .props
                        .handleEdit()
                }}>Edit</button>
       <button onClick={()=>{this.props.handleSave(this.props.hike._id, this.props.input); this.props.handleEdit()}}  style={{display:this.props.input.edit ? "inherit" : "none"}} >Save</button>

                <button
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