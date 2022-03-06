// export const incNumber = () => {
//     return {
//         type: 'Increment'//,
//         //payload: num
//     }
// }

// export const decNumber = () => {
//     return {
//         type: 'DECREMENT'
//     }
// };

export const incNumber = () =>{
    console.log('reach here inc')
    return {
        type: 'INCREMENT'//,
       // payload: num
       //INCREMENT
    }
   
    //dispatch({ type: 'INCREMENT'})
}

export const decNumber = () => {
    console.log('reach here drc')
    return {
        type: 'DECREMENT'
    }
};