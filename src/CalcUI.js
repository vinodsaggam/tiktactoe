import React, { Component } from 'react'
import "./styles.css";

export class CalcUI extends Component {
  render() {
    return (
      <div>
        <input type="text" id='cal_input' ref={this.props.btnRef} className='cal-input' onChange={(e) => this.props.handleChange(e)}/>
      </div>
    )
  }
}

export default CalcUI