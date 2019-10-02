import React, {useContext} from 'react';
import {ThemeContext} from '../App';
export default ()=>{
    let disp=useContext(ThemeContext);
    console.log(disp);
    return (
        <div>
            <p>ThemeView</p>
        </div>
    )
}
