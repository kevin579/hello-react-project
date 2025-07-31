const reducer = function(state,action){
    state = state ||0;
    console.log(state);
    if (action.type==='+'){
        state+=action.value;
    }
    return state;
}




export default reducer