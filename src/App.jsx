
import { useState } from 'react'
import './App.css'
import SunGlass from './components/sunglass/sunGlass'
import Watch from './components/watch/watch'
import { useEffect } from 'react';

function App() {

  const [watches, setWatches]= useState([]);

  // useEffect(()=>{
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data=> setWatches(data))
  // }, [])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/raselworshop/watchces-data/refs/heads/main/watches.json')
    .then(res => res.json())
    .then(data=> setWatches(data))
  }, [])
  // const watches = [
  //   {id:'a', name:'Apple Watch', price:200},
  //   {id:'ab', name:'Sumsung Watch', price:200},
  //   {id:'abc', name:'Casio Watch', price:200},
  //   {id:'abcd', name:'Mi Watch', price:200},
  //   {id:'abcda', name:'Ally Watch', price:200},
  //   {id:'abcdb', name:'BMW Watch', price:200},
  //   {id:'abcdc', name:'Micro Watch', price:200},
  //   {id:'abcdd', name:'Cruestal Watch', price:200},
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      <h3>Watches: {watches.length}</h3>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      {/* <SunGlass></SunGlass> */}
    </>
  )
}

export default App
