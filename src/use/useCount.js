import React, {useContext, useReducer} from 'react';
import reducer from '../pages/reducer';
const CountContext=React.createContext();
const initialState={
    count:0
}
const contextValue=useContext(CountContext);
export default ({children}) => {
    const contextValue=useReducer(reducer, initialState);
    return(
        <CountContext.Provider value={contextValue}>
            {children}
        </CountContext.Provider>
    )
}
