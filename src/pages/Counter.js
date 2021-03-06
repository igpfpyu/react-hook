import React, {useEffect,useRef, useReducer} from 'react';
import reducer from './reducer';
import ThemeView from './ThemeView';
const initialState={
    count:0
}
export default (props)=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const inputEQ=useRef(null)
    useEffect(()=>{
        console.log(state);
    });
    const increment=()=>{
        console.log(inputEQ);
        inputEQ.current.focus();
        dispatch({type:"increment"});
    }
    return (
        <div>
            <ThemeView />
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
