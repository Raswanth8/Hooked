import React, {useState,useRef,useEffect} from 'react'


export default function App() {

  const [name,setName] = useState('')
  const prevName = useRef('')
  const inpRef = useRef()
useEffect(()=>{
  prevName.current = name
},[name])

function focus(){
  inpRef.current.focus()
}
  return (
    <>
      <input type="text" value ={name} ref ={inpRef} onChange ={(e) => setName(e.target.value) } />
      <p>My new Name is {name}, previous name is {prevName.current} </p>
      <button onClick={focus}>Focus</button>
    </>
  );
}