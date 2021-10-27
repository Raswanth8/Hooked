import React, {useState,useMemo,useEffect} from 'react'


export default function App() {
  
const [number,setNumber] = useState(0)
const [dark, setDark] = useState(false)
const squareNum =  useMemo(() => {
  return slowNum(number)}, [number])
const themeStyles = useMemo( () =>{
  return{
    backgroundColor : dark ? 'black' : 'white',
    color : dark ? 'white' : 'black'
  }
},[dark])

useEffect(()=>{
  console.log("theme changed")
},[themeStyles])
  return (
    <>
      <input type="number" value={number} onChange = {(e)=>(setNumber(parseInt(e.target.value)))} />
      <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style = {themeStyles}>{squareNum}</div>
    </>
  );
}

function slowNum(num){
for(let i = 0;i<100000000;i++){}
return num*2
}

