import React,{useEffect} from "react";
import "./styles.css"

export  default  function Block({value,setValue,id,winner,played}) {
    
    return (
            <button id={id} onClick={setValue} className={`squares ${(played == id && winner == null) ? 'squares_focus' : ''} ${(winner != null) ? (winner[0] == id || winner[1] == id || winner[2] == id) ? 'squares_win' : '' : ''}`}>{value}</button>
    )
}

// import React, { Component } from 'react'
// import './styles.css'

// export default class Block extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {

//         return (
//             <button className='squares' onClick={this.props.setValue}>{this.props.value}</button>
//         )
//     }
// }
