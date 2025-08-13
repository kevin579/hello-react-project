import React from 'react'
import ReactDOM from 'react-dom'

export default function Func() {

  const [count,setCount] = React.useState(0);
  const input = React.useRef()
  const output = React.useRef()
  function add(){
    setCount(count=>count+1)
  }

  function remove(){
    ReactDOM.unmount(document.getElementById('root'))
  }

  React.useEffect(()=>{
    const timer = setInterval(()=>{
        add();
    },100)
    return ()=>{
        clearInterval(timer)
    }
  },[]) 
  return (
    <div>
        <span>{count}</span>
        <span ref={output}></span>
        <input type="text" ref={input}/>
        <button onClick={add}>Add</button>
        <button onClick={remove}>remove</button>
        <button onClick={()=>{output.current.innerHTML=input.current.value}}>Show</button>
    </div>
  )
}
