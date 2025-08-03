export default function reducer(state,action){
    console.log(state);
    state = state||0
    if (action.type==='+'){
        state += action.amount
    }else if (action.type==='-'){
        state -= action.amount
    }
    return state
}