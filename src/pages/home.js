import React from 'react';
import useFriendStatus from './useFriendStatus';
export default function Home(props){
    const isOnline = useFriendStatus(props.friend);
console.log(isOnline);
    return (
        <div>
            {isOnline?<div>isOnline</div> :<div>noLine</div>}
        </div>
    )
}

