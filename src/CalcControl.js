import React, { Component, createRef } from 'react'
import CalcUI from './CalcUI';
import CalcBody from './CalcBody';

export class CalcControl extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputData: [],
            btnPressed: null
        }

        this.bRef = createRef(null)
    }

    calArr = ['AC', 'C', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '.', 0, '**', '='];

    handleClick(i) {

        switch (i) {
            case '=':
                const s = String(this.bRef.current.value);
                this.bRef.current.value = eval(s);
                break;
            case 'AC':
                this.bRef.current.value = '';
                this.setState({ inputData: [] })
                break;
            case 'C':
                this.bRef.current.value = this.bRef.current.value.slice(0, -1)
                this.state.inputData.pop()
                this.setState({ inputData: [...this.state.inputData] })
                break;

            default:
                if (this.bRef.current.value == '') {
                    this.bRef.current.value = i;
                } else {
                    this.bRef.current.value = this.bRef.current.value + '' + i;
                }
                this.setState({ inputData: [...this.state.inputData, i] })
                break;
        }
        console.log(this.state.inputData)
    }

    handleChange(e) {
        const data = e.target.value;
        const newData = data.split('');
        this.calArr.map(i => {
            if (data[data.length - 1] === this.calArr[i]) {
                newData.map(i => {
                    if (newData[i] != this.state.inputData[i]) {
                        return this.setState({ inputData: [...this.state.inputData, newData[i]] })
                    }
                })
            } else {
                e.target.value = data.slice(0, -1)
            }
        })
    }

    render() {
        return (
            <>
                <CalcUI btnRef={this.bRef} handleChange={(e) => this.handleChange(e)} />
                <CalcBody calArr={this.calArr} handleClick={(i) => this.handleClick(i)} />
            </>
        )
    }
}

export default CalcControl