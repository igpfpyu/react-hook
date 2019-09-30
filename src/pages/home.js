import React, {useEffect, useState} from 'react';
import useFriendStatus from './useFriendStatus';
export default function Home(props){
    const isOnline = useFriendStatus(props.friend);
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState({name: 11});
    useEffect(() => {
        console.log('aaaaaa')
        document.title = `You clicked ${count} times`;
        return ()=>{
            console.log('bbbbb')
        }
    },[count]); //, [count]//第二参数可以传入props的值来更新界面；
    return (
        <div>
            <p>{sum.name}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setSum({name: ++sum.name})}>
                Click me
            </button>
            {isOnline?<div>isOnline</div> :<div>noLine</div>}
        </div>
    )
}

