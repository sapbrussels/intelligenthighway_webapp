const counterReducer =(state=0, action){
    switch ( action.type){
        case 'INCREMENT':
            return statte +1
        case 'DECRELMENT':
            return state -1
    }
}
export default counterReducer;