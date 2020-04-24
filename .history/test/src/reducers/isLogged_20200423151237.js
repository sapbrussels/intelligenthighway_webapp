const loggedReducer =(state = false, action) =>{
    switch(action.type){
        case 'SIGN_IN':
            return !state //opposite of current state
    }
};

export default loggedReducer;