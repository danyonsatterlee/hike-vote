import React from "react";

class Form extends React.Component {
    render() {
        return (

            <div className="row space">
                <div className="mini-wrapper center-block">
               <div className="bar text-center"></div>
               </div>
                <div className="col-md-12">
                    <h1 className="text-center add-header">Add Hike</h1>
                </div>
                <div className="col-md-3 col-md-offset-3 text-center">

                    <h3>Hike Name</h3>
                    <input value ={this.props.input.title} onChange = {(event)=>{this.props.handleChange("title", event)}} placeholder="ex. Fairy Falls"/>

                    <h3>Difficulty</h3>
<select value ={this.props.input.difficulty} onChange = {(event)=>{
                        this.props.handleChange("difficulty", event)
                    }}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Extreme">Extreme</option>
                   
               
                    </select>
                    <h3>State</h3>
                    <select value ={this.props.input.state} onChange = {(event)=>{
                        this.props.handleChange("state", event)
                    }}>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AR">AR</option>
                        <option value="AZ">AZ</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="IA">IA</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="MA">MA</option>
                        <option value="MD">MD</option>
                        <option value="ME">ME</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MO">MO</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="NC">NC</option>
                        <option value="NE">NE</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NV">NV</option>
                        <option value="NY">NY</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WV">WV</option>
                        <option value="WY">WY</option>
                    </select>
                    <h3>National or State Park</h3>
                  
                    <input value ={this.props.input.park} onChange = {(event)=>{
                        this.props.handleChange("park", event)
                    }}
                    placeholder="ex. Yellowstone"/>
                </div>
                <div className="col-md-3 text-center">
                    <h3>Length</h3>
                    <input value ={this.props.input.length} onChange = {(event)=>{
                        this.props.handleChange("length", event)
                    }}
                    placeholder="in miles"/>
                    <h3>Image</h3>
                    <input value ={this.props.input.image} onChange = {(event)=>{
                        this.props.handleChange("image", event)
                    }}
                    placeholder="url link"/>
                    <h3>Location</h3>
                    <input value ={this.props.input.location} onChange = {(event)=>{
                        this.props.handleChange("location", event)
                    }}
                    placeholder=" google map url link"/>
                    <h3>Description</h3>
                    <input value ={this.props.input.description} onChange = {(event)=>{
                        this.props.handleChange("description", event)
                    }}
                    placeholder="The hike was wonderful becuase..."/>
     
                </div>
                   <div className="mini-wrapper center-block">
                    <button  className="btn-lg btn-custom" onClick={()=>{this.props.handleClick(this.props.input)}}>submit</button>
                    </div>
                   
            </div>

        );
    }
}

export default Form;