import {createStore} from 'redux'
const counterReducer=(state={counter:0},action)=>{
    if(action.type==='increament'){
        if(action.payload){
            return {counter:state.counter+action.payload}
        }
        return{
            counter:state.counter+1
        }
    }
    if(action.type==='decrement'){
        if(action.payload){
            return {counter:state.counter-action.payload}
        }
        return{
            counter:state.counter-1
        }
    }
    return state;
}

const store=createStore(counterReducer);

export default store;