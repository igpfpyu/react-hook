import React, {useEffect,useReducer} from 'react';
import reducer from './reducer';
const initialState={
    count:0
}
export default ()=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    useEffect(()=>{

    });
    const increment=()=>{
        dispatch({type:"increment"});
    }
    return (
        <div>
            <p>Counter：{state.count}</p>
            <button onClick={()=>increment()}>增加</button>
            <button onClick={()=>dispatch({type:"decrement"})}>递减</button>
        </div>
    )
}
// function increment(dispatch){
//     dispatch({type:"increment"})
// }
