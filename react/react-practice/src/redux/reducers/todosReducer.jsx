import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant"

const initialstate={
    isloading:false,
    todos:[],
   error:null
    
}

export const todoReducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state,
              isloading:true
            }
             case GET_TODOS_SUCCESS:
            return{
                ...state,
              isloading:false,
              todos:action.payload,
              error:null
            }
             case GET_TODOS_FAILED:
            return{
                ...state,
               isloading:false,
              todos:[],
              error:action.payload
            }
            default:
               return state
    }
}