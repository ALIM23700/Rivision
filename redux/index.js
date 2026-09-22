const {createStore}=require('redux')

const Increment="Increment";
const Decrement="Decrement";
const Add_User="Add_User";
//state
const initialCounterState={
    user:[],
    count:0
}
const initialuserState={
    users:[
        {
            name:"alim"
        }
    ]
}
const userCount=(value)=>{
   return{
     type:Add_User,
     payload:value
   }

}

//action
const incrementCounter=()=>{
    return {
        type:Increment,
    }
}
const decrementCounter=()=>{
    return {
        type:Decrement,
    }
}


const counterReducer=(state=initialCounterState,action)=>{
    switch(action.type){
        case Increment:
            return {
                ...state,
                count:state.count+1
            }


        case Decrement:
             return {
                ...state,
                count:state.count-1
            }
        case Add_User:
            return{
                ...state,
              
               user: [...state.user, action.payload]
            
             }

    }
   
    

}
const store=createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(userCount("anisul"))

//  1.satate
//  2.dispatch action
//  3.reducer
//  4.store



