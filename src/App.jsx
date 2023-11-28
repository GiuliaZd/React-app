import { useState } from 'react';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {count <= 10 
//         ? <p>You have pressed the button {count} times</p> 
//         : <p>You have pressed the button more than 10 times</p>
//       }
//       <button onClick={() => setCount(count + 1)}>Add1</button>
//       <button onClick={() => setCount(count -1)}>Minus1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }

function App({message}) {
  return(
    <>
  {(message.length >10) 
    ? <p>Too long</p>
    : <p>{message}</p>}
  </>);
}

export default App;

