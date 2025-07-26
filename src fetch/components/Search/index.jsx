import React, { Component } from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'


export default class index extends Component {
  render() {
    return (
      <div className = "header">
          Username: <input type="text" name = "uname" ref = {(c)=>this.input = c}/>
          <button onClick={this.search}>Search</button>
        </div>
    )
  }

  search = async()=>{
    const {input:{value}} = this;
    console.log(value)
    // axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //     response => {
    //       console.log(response.data);
    //       pubsub.publish('Users','hi')
    //     },
    //     error => console.log(error)
    // )
    // fetch(`https://api.github.com/search/users?q=${value}`).then(
    //   (response)=>{
    //     return response.json();
    //   }
    // ).then(
    //   response =>{
    //     console.log(response)
    //   }
    // ).catch(
    //   console.log("error")
    // )
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`);
      const data = await response.json()
      console.log(data)
    }catch (error){
      console.log(error)
    }
    
  }

}
