import React, { Component } from 'react'
import { Link, Outlet,Navigate } from 'react-router-dom';
export default class index extends Component {
  state = {message:[
      {id:1,title:'detail 1',content:'A'},
      {id:2,title:'detail 2',content:'B'},
      {id:3,title:'detail 3',content:'C'},
      {id:4,title:'detail 4',content:'D'},
      {id:5,title:'detail 5',content:'E'},
    ]}
  
  back = ()=>{
    console.log('back');
    this.props.navigate('/home')

  }
  render() {
    const message = this.state.message.find(message=>message.id===this.props.id)
    console.log(message);
    return (
      
      // <div>{JSON.stringify(message)}</div>
      <div>
        {
          this.state.message.map(message=>{
            return (
              <li key= {message.id}>
                {/* <a href="/message">{message.title}</a> */}
                {/* <Link to = {`detail/${message.id}`}>{message.title}</Link> */}
                <Link to = 'detail' state={{id:message.id}}>{message.title}</Link>
              </li>
            )
          })
        }
        <Outlet/>
        <button onClick={this.back}>Return</button>
      </div>
    )
  }
}
