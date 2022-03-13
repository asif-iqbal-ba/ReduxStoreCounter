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
const inc = 'INCREMENT'
const dec = 'DECREMENT'
const reset = 'RESET'

export const incNumber = () =>{
    console.log('reach here inc')
    return {
        type: inc//,
       // payload: num
       //INCREMENT
    }
   
    //dispatch({ type: 'INCREMENT'})
}

export const decNumber = () => {
    console.log('reach here drc')
    return {
        type: dec//'DECREMENT'
    }
};

export const reSet =()=>({
    type: reset
})