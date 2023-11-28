import { useState } from 'react';
import './App.css';
function App () {
  // const [name, setName]= useState('');
  //  const inputChanged = (event) => {
  //   setName(event.target.value);
  // }
  const [person, setPerson]=useState({firstname:'', lastname:'', email: ''})
  const inputChanged = (event) => {
  setPerson({...person, [event.target.name]: event.target.value});
}
 const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  }

  return (
    <>
    {/* <p>{name}</p>
    <input value={name} onChange={inputChanged}/> */}
    <p>Name: {person.firstname} {person.lastname} Email: {person.email}</p>
    <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
    <input placeholder="Last name" name="firstname" value={person.lastname} onChange={inputChanged} />
    <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
    <button onClick={showAlert}>Submit</button>
    </>
  )
}
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

// function App({message}) {
//   return(
//     <>
//   {(message.length >10) 
//     ? <p>Too long</p>
//     : <p>{message}</p>}
//   </>);
// }
// function App() {
//   const [color, setColor] = useState('black');

//   return (
//     <>
//         <p style={{color}}>Hello World</p> 
//         <button onClick={() => setColor('red')}>Change color</button>
//     </>
//   );
// }

export default App;

