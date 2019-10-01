import React, {useEffect,useRef, useReducer} from 'react';
import reducer from './reducer';
const initialState={
    count:0
}
export default ()=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const inputEQ=useRef(null)
    useEffect(()=>{

    });
    const increment=()=>{
        console.log(inputEQ);
        inputEQ.current.focus();
        dispatch({type:"increment"});
    }
    return (
        <div>
            <input type="text" ref={inputEQ} />
            <p>Counter：{state.count}</p>
            <button onClick={()=>increment()}>增加</button>
            <button onClick={()=>dispatch({type:"decrement"})}>递减</button>
        </div>
    )
}
// function increment(dispatch){
//     dispatch({type:"increment"})
// }
