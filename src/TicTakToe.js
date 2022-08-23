import React from "react";

var arr = [];

function Square(props) {
    return (
        <button ref={props.refs} className={`square ${props.className}`} onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // console.log(squares[a]+""+squares[b]+""+squares[c])
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
            arr = [a, b, c];

            return squares[a];
        }

    }
    return null;
}


class Board extends React.Component {

    renderSquare(i) {
        return <Square refs={this.props.refbtn} className={`${calculateWinner(this.props.squares) != null ? (arr[0] == i || arr[1] == i || arr[2] == i) ? 'square_focus' : '' : ''}`} squares={this.props.squares} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
    }


    render() {
        const renderSquares = Array(9).fill().map((_,i) => i);
        console.log(renderSquares)

        return <div className="board-column"> {renderSquares.map((i) => {
            return (
                    <div className="board-row">
                        {this.renderSquare(i)}
                    </div>
            )
        }) }</div>

        
    }
}

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            player: "X",
            value: []
        }
        this.btnref = React.createRef()
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(this.state.squares)) {
            return;
        }

        if (squares[i] == null) {
            squares[i] = this.state.player
            this.setState({ squares: squares })
            this.state.player == "X" ? this.setState({ player: "O" }) : this.setState({ player: "X" })
        }
        if (this.btnref.current.value != '') { this.btnref.current.focus() }
    }
    handleClear() { this.setState({ squares: Array(9).fill(null) }) }


    render() {
        const winner = calculateWinner(this.state.squares);

        return (
            <>
                <div className="status">Players: "X" and "O"</div>
                <div className="status">Player: "{this.state.player}" </div>
                <div className="status"> Winner : "{ winner ? winner : this.state.squares.filter(x => x !== null).length == 9 ? 'Draw' : ''}" </div>
                <div className="game" style={{ display: 'inline-block' }}>
                    <div className="game-board">
                        <Board refbtn={this.btnref} squares={this.state.squares} onClick={i => this.handleClick(i)} />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }} ><button className={`rst-btn ${this.state.squares.filter(x => x !== null).length == 9 || winner ? 'rst-btn_true' : ''}`} onClick={() => this.handleClear()} >Restart</button></div>
            </>
        );
    }
}

// ========================================

