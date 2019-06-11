import React, {Component, useState, useMemo, memo, useCallback} from 'react'


const Foo = memo (function Foo (props) {
  console.log('Counter render')
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
})

function App (props) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const double = useMemo(() => {
    return count * 2
  }, [count === 3])

  const onClick = useCallback(() => {
    console.log('Click')
    setClickCount((clickCount) => clickCount + 1)
  },[])

  return (
    <div style={{padding:'100px'}}>
      <button type="button"
        onClick={() => {setCount(count +　1) }}
      >
        Click({count}) double: ({double})
      </button>
      <Foo count={double} onClick={onClick}/>
    </div>
  )
}

export default App;