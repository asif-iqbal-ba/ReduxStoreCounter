import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'
const App = () => {
  const mState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  const clickIncr =()=>{
    console.log('c',decNumber)
    //dispatch(decNumber)
    dispatch({type:'INCREMENT'})
  }

  return (
    <>
      {/* <h1>Welcome To Redux</h1> */}
      <div className="main-div">
        <div className="container">
          <h1> Increment / Decrement Counter</h1>
          <h4>Using React and Redux</h4>
          <div className="quantity">
            {/* <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber)}><span>-</span></a> */}
            <button  onClick={() => dispatch({type:'DECREMENT'})}><span>-</span></button>
            {/* <input name="quantity" type="text" class="quantity__input" value={mState} /> */}
            <h1>{mState}</h1>
            {/* <a class="quantity__plus" title="Increment" onClick={()=> dispatch(incNumber)} ><span>+</span></a> */}
            <button className="quantity__minus" title="Decrement" onClick={() => dispatch({type:'INCREMENT'})}><span>+</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
// import logo from './logo.svg';
// import './App.css';
// import Abc from './Routes'
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//         <Abc />
//     </div>
//   );
// }

// export default App;
