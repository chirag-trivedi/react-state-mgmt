export default function(state=null,action) {
    switch(action.type) {
        case 'FOOD_ITEMS':
            console.log('reducer called');
            return action.payload;
        default:
            return state
    }
}