import {createStore} from 'redux';
const reducer=(state,action)=>{
    switch(action.type){
        case "userinfo":
        return {
            ...state,user:action.data
        }
    }

}
export const store=createStore(reducer)