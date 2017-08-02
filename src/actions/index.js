import axios from "axios";


export function loadData(){
    return(dispatch)=>{
        return axios.get("http://localhost:8080/votes").then((reponse)=>{
            dispatch(setData(reponse.data.data))
        }).catch((error)=>{
            throw error;
        });
    }

}

export function addData(data){
    return(dispatch)=>{
        return axios.post("http://localhost:8080/votes", data).then((response)=>{
            dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}

export function deleteData(id){
    return(dispatch)=>{
        return axios.delete(`http://localhost:8080/votes/${id}`).then((response)=>{
            dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}

export function editData(id,data){
    return(dispatch)=>{
        return axios.put(`http://localhost:8080/votes/${id}`,data).then((response)=>{
            dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}

export function upVote(id){
    return(dispatch)=>{
        return axios.put(`http://localhost:8080/votes/upvote/${id}`).then((response)=>{
        dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}
export function downVote(id){
    return(dispatch)=>{
        return axios.put(`http://localhost:8080/votes/downvote/${id}`).then((response)=>{
        dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}
export function setData(data){
    return{
        type:"SET_DATA",
        data
    }
}