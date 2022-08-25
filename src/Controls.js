import React, { memo, useState, useRef,useEffect } from "react";
import Block from "./Block";

const Controls = () => {
    const sq = Array(9).fill().map((_,i) =>i);

    const [val, setVal] = useState({squares: Array(9).fill(null)});
    const [player, setPlayer] = useState(true);
    const [played, setPlayed] = useState(null);
    
    
     const handleClick = (i)  => {

        const newSquare = val.squares.slice(); 

        if(winnerCalculate(val)){
            return;
        }
        
        if(newSquare[i] == null)
        {
            newSquare[i] = player ? "X" : "O";
            setPlayer(!player);
            setVal({ squares: newSquare })
            setPlayed(i)
        }
        
    }

    const renderSquare = (i) => {
        return <Block key={i} id={i} value={val.squares[i]} setValue={() => handleClick(i)} winner={winnerCalculate(val)} played={played} />
    }

    const winnerCalculate = (val) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let index = 0; index < lines.length; index++) {
            const [a,b,c] = lines[index];
            if(val.squares[a] && val.squares[a] == val.squares[b] && val.squares[b] == val.squares[c]){
                return [a,b,c];
            }
        }
        return null;
    }


    const winner = winnerCalculate(val);

    const reset = () => {
        setVal({ squares: Array(9).fill(null)})
        setPlayed(null)
    }


  return (
    <>
    <div className="stats">
        Current Player: {player ? "X" : "O"}
        <br/>
        Winner: {(winner != null) && val.squares[winner[0]]}
    </div>
    <div className="block">
    {sq.map(i => renderSquare(i))}
    </div>
    <div className="status">
       {winner && <button onClick={() => reset()} className="btn" >Restart</button>}
    </div>
    </>
  )
}

export default Controls

// import Block from './Block'
// import React, { Component } from 'react'

// export default class Controls extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             squares: Array(9).fill(null),
//             value: ''
//         }
//     }
    
//     handleClick(i) {
//         const newSquare = this.state.squares.slice(); 
//         newSquare[i] = "X";
//         this.setState({ squares: newSquare })
//         console.log(this.state.squares)
//     }

//     renderSquares(i) {
//         return <Block key={i} value={this.state.squares[i]} setValue={() => this.handleClick(i)} />
//     }

//     render() {
//         const squ = Array(9).fill().map((_, i) => i);
//         return (
//             <div className='block'>
//                  {squ.map(i => {
//                     return this.renderSquares(i)
//                 })}
//             </div>
//         )
//     }
// }

