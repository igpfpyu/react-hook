import React, {} from 'react'
import useCount from '../use/useCount';
const ContextCount = () => {
    const [count, dispatch] = useCount();
    return (
        <div>
            <div>adafaf</div>
            {count}
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
        </div>
    );
};
export default ContextCount;
