import React, {PureComponent, useState, useRef, useEffect} from 'react'


function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef()
      
  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  } , [])

  useEffect(() => {
    if (count >= 5) {
      clearInterval(it.current)
    }
  })
  
  return [count, setCount]
}

function useCounter(count) {
  return (
    <h1>{count}</h1>
  )
}


function App (props) {
  const [count, setCount] = useCount(0);
  const Counter = useCounter(count)
  return (
    <div style={{padding: '100px'}}>
      {Counter}
    </div>
  )
}

export default App;