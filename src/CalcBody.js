import React, { Component } from 'react'

export class CalcBody extends Component {

    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div className='cal-body'>
                {this.props.calArr.map((i, index) => {
                    return <button className='cal-btn' key={index} onClick={() => this.props.handleClick(i)} >{i}</button>
                })}
            </div>
        )
    }
}

export default CalcBody