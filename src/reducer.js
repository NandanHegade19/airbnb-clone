export const initialState = {
    startDate: {},
    endDate: {},
    guests: '',
    place: '',
}

const reducer = (state, action) => {
   console.log("action------->", action)
    switch(action.type){
        case 'setPlace':
            return {
                ...state,
                guests: action.guests,
                place: action.place,
            }
        case 'setDates':
            return {
                ...state,
                startDate: action.startDate,
                endDate: action.endDate,
            }
        default:
            return state
    }
}

export default reducer;