import React, { Component } from 'react'
import './App.css';
import Controls from './Controls';
import TodoControls from './TodoControls';
import CalcControl from './CalcControl';

export class Tops extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showTTT: false,
            showCCC: false,
            showTDL: false,
            title: 'Developed by VS'
        }
    }

    handleClick(stg) {

        switch (stg) {
            case 'TTT':
                this.setState({
                    showTTT: true,
                    showCCC: false,
                    showTDL: false,
                    title: 'Tic Tac Toe'
                })
                break;
            case 'CCC':
                this.setState({
                    showTTT: false,
                    showCCC: true,
                    showTDL: false,
                    title: 'Calculator'
                })
                break;
            case 'TDL':
                this.setState({
                    showTTT: false,
                    showCCC: false,
                    showTDL: true,
                    title: 'ToDo List'
                })
                break;

            default:
                break;
        }

    }

    render() {
        return (
            <>
                <div className="App">
                    <button onClick={() => this.handleClick('TTT')} className='tops-btn'>Tic Tac Toe</button>
                    <button onClick={() => this.handleClick('CCC')} className='tops-btn'>Calculator</button>
                    <button onClick={() => this.handleClick('TDL')} className='tops-btn'>Todo Task</button>
                </div>
                <h1>{this.state.title }</h1>
                {this.state.showTTT && <Controls />}
                {this.state.showTDL && <TodoControls />}
                {this.state.showCCC && <CalcControl />}

            </>
        )
    }
}

export default Tops