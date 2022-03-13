const initialState = 10

export const changeTheNumber = (state = initialState, action) =>{
    console.log('it is fired')
    switch (action.type) {
        case "INCREMENT":{
            console.log('ok +') 
            return state + 1;
        }
        case "DECREMENT": {
            console.log('ok -')
            return state - 1;
        }
        case "RESET":{
            return state = initialState
        }
        default:{ 
            console.log('go defa')
            return state;
        }

    }
}

export default changeTheNumber