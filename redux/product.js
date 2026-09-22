const {createStore}=require('redux')

const GET_PRODUCT="GET_PRODUCT";
const CREATE_PRODUCT="CREATE_PRODUCT";

const initialProduct={
    product:[],
    countProduct:0
}

const getProduct=()=>{
    return{
        type:GET_PRODUCT,
       
    }

}
const createProduct=(value)=>{
    return{
        type:CREATE_PRODUCT,
        payload:value
    }

}

const productReducer=(state=initialProduct,action)=>{
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state,
                product:[...state.product]
            }
             case CREATE_PRODUCT:
            return{
                ...state,
                product:[...state.product,action.payload]
            }
    }
    
    }
const store=createStore(productReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProduct())
store.dispatch(createProduct("watch"))
