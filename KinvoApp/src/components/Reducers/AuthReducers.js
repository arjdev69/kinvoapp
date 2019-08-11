const INITIAL_STATE = {
    searchKey: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'search_Object'){
        return { ...state, searchKey: action.payload }
    }
    return state;
}