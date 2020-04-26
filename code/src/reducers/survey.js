const initState = {answers:{
    name: "Bob",
    rooms: "",
    parking: false,
    city: ""
}



  
}
export const addInfo = (info) => {
  return{
    type: "ADDINFO",
    payload: info
  }
}

export const survey = (state = initState, action  )=> {
    switch(action.type){
        case 'ADDINFO' :
            return {answers: action.payload}
  
        default:
            return state
    }
}
