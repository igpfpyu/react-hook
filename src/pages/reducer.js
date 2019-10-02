const counterReducer=(state, action)=>{
    console.log(state);
    switch (action.type) {
        case "increment":
            return {...state, count:++state.count};
        case "decrement":
            return {...state, count:--state.count}
        default:
            return {...state};
    }
}
export default counterReducer;
