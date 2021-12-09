import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0
    }
    increment =()=>{
        this.setState({count:this.state.count + 1})
    }
    componentDidMount(){
    setInterval(() => {
        this.increment()
    }, 1000);
}
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Counter
