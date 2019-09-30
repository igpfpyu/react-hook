import {useState,useEffect} from 'react';
export default function useFriendStatus(friendID){
    const [isOnline] = useState(friendID);
    //
    // useEffect(() => {
    //     setIsOnline(friendID)
    // }, [isOnline, friendID]);
    return isOnline;

}
