let defaultState = {
    hike: [
        {
            title: "",
            location: "",
            difficulty: "",
            state: "",
            park: "",
            image: "",
            directions: "",
            description: "",
            length: ""
        }

    ]
}


const mainReducer =(state = defaultState, action)=>{
    if(action.type==="SET_DATA"){
        return{
            ...state,
            hike:action.data
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;