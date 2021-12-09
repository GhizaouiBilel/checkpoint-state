import React, { Component } from 'react'
import Appp from './Appp'
export class App extends Component {
  state= {
    isShow : false
  }
  handleShow=()=>{
this.setState({ isShow:!this.state.isShow})
  }
  render() {
    return (
      <div style={{marginRight:"80px" , textAlign:"center"}}>
        <button onClick={this.handleShow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow === true ? <Appp/> : null }

      </div>  
    )
  }
}

export default App
