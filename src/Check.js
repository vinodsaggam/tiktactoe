import React, { Component } from 'react'
let x =0;
class Check extends Component {
    componentDidMount() {
        x+=3;
        console.log(x)
    }
  render() {
    return null
  }
}

export default Check