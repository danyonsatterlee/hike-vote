import React from "react";
let FontAwesome = require('react-fontawesome');
class Hike extends React.Component {
    render() {
        return (

            <div className="col-md-4 col-md-offset-1 hike">
                <div className="col-md-12 ">
                    {/*NAME*/}
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
                    <h2 className="text-center hike-name">{this.props.hike.title}
                    </h2>
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
                </div>
                <div className="col-md-3">
                    {/*LENGTH*/}
                    <h3 className="result-title">Distance</h3>
                    <p className="result-p">{this.props.hike.length}
                        miles
                    </p>
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
                    }}/> {/*DIFFICULTY*/}
                    <h3 className="result-title">Difficulty</h3>
                    <p className="result-p">{this.props.hike.difficulty}
                    </p>
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
                    }}/> {/*STATE*/}
                    <h3 className="result-title">State</h3>
                    <p className="result-p">{this.props.hike.state}
                    </p>
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
                    }}/> {/*PARK*/}
                    <h3 className="result-title">Park</h3>
                    <p className="result-p">{this.props.hike.park}
                    </p>
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

                {/*SAVE BUTTON*/}
                <div className="col-md-8 col-md-offset-1">
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
                    }}/> {/*DESCRIPTION*/}
                    <h3 className="result-title">Park</h3>
                    <p className="result-p">{this.props.description}
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
                    <div className="vote">
                                            <h3 className="result-title">Votes</h3>

                        {/*UPVOTE BUTTON*/}
                        <FontAwesome
                            onClick={() => {
                            this
                                .props
                                .handleUp(this.props.hike._id)
                        }}
                        className="results text-center"
                            name='arrow-up'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/>
                        <h4 className="result-p results">
                            Up Votes {this.props.hike.upvotes - this.props.hike.downvotes}</h4>
                        {/*DOWNVOTE BUTTON*/}
                        <FontAwesome
                            onClick={() => {
                            this
                                .props
                                .handleDown(this.props.hike._id)
                        }}
                         className="results text-center"
                            name='arrow-down'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/>


                    </div>
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