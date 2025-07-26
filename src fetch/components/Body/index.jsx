import React, { Component } from 'react'
import pubsub from 'pubsub-js'

export default class index extends Component {
  render() {
    var token = pubsub.subscribe('Users',(msg,data)=>{
      console.log(data);
    })
    return (
      <div className="body">
            <div className="user">
                <a href="https://baidu.com">
                    <img src="/logo192.png" alt="Img"/>
                </a>
                <span>?</span>
            </div>
        </div>
    )
  }
}
