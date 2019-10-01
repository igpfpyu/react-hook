import React, {useEffect, useState} from 'react';
import useFriendStatus from './useFriendStatus';

const Home=(props)=>{
    const isOnline = useFriendStatus(props.friend);
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState({name: 11});
    const [width, setWindth]=useState(window.innerWidth);
    const resizeHandle=()=>{
        setWindth(window.innerWidth);
        console.log(window.innerWidth);
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        window.addEventListener('resize', resizeHandle);

    }); //, [count]//第二参数可以传入props的值来更新界面；
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
export default Home;
