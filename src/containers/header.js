import React from "react";


class Header extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="bk-img hiker-parent text-center ">
              
                    <div className="hiker-child">
                    <h1 className="text-center h1-hike-header">Best Hikes</h1>
                   <p className="sub-hike-header">Add your favorite hike to the list. Vote on hikes. Find the best hikes in the country</p>
     
                    <p><a className="text-center sub-hike-header" href="#">see hikes   </a> | <a className="text-center sub-hike-header" href="#">add a hike</a></p>
                
                 </div>
                </div>
                </div>

          
                 
                    
               
    

        );
    }
}

export default Header;