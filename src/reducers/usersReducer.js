export default (state = [], action) => {
    //console.log('users reducer was called');
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};