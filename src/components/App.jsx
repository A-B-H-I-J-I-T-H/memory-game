import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Card from './Card.jsx'

function App() {
  const [value,setvalue] = useState([]);
  const [score,setscore] = useState(0);

  let index,arr = [],currentscore = value.length;

  useEffect(() => {},[value])

  const handleclick = (e) => {
    if (value.find(ind => { return ind === e })===undefined)
      setvalue(current => [...current, e]);
    else
      fin();
  }

  const fin = () => {
    setscore(currentscore);
    setvalue([]);
  }

  return (
    <>
      {Array(7).fill(0).map((_, i) => {
        index = getRndInteger(1,30);
        while (arr.find(ind => { return ind === index })!==undefined) {
          index = getRndInteger(1,30);
        }
        arr[i] = index;
        return <Card key={i} index={index} onClick={(e) => handleclick(e)} />}
      )}
      {console.log(value)}
      score = {currentscore}
      <br />
      bestscore = {score}
    </>
  )
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export default App
