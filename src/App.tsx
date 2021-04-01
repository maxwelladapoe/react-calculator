import React from 'react';
import './App.scss';


interface ICalculatorState {
    userInput: string,
    answer: string,
}

interface ICalculatorProps {

}

class App extends React.Component<ICalculatorProps, ICalculatorState> {

    constructor(props: ICalculatorProps) {
        super(props);
        this.state = {
            userInput: '',
            answer: '0'
        }
    }


    buttonPressed(value: any) {
        let input: string = this.state.userInput + value
        this.setState({userInput: input})
    }


    backSpace() {
        let str: string = this.state.userInput;
        this.setState({userInput: str.substring(0, str.length - 1)})
    }

    compute() {
        let input: string = this.state.userInput.replaceAll('×', '*').replaceAll('÷', '/')
        if (input){
            let answerEval = Function('"use strict";return (' + input + ')')();
            console.log(85%2)
            this.setState({answer: answerEval})
        }

    }

    clearEverything(clearType: string) {
        this.setState({answer: '0', userInput: ''})
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <div className="calculator-wrap">
                        <div className='screen'>
                            <div className='input-stream'>{this.state.userInput}</div>
                            <div className='answer'>{this.state.answer}</div>
                        </div>
                        <div className='numbers-wrap'>
                            <div className="number yellow" onClick={() => {
                                this.clearEverything('C')
                            }}>C
                            </div>
                            <div className="number yellow" onClick={() => {
                                this.backSpace()
                            }}>⌫
                            </div>
                            <div className="number yellow" onClick={() => {
                                this.buttonPressed('%')
                            }}>%
                            </div>
                            <div className="number yellow" onClick={() => {
                                this.buttonPressed('÷')
                            }}>÷
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(9)
                            }}>9
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(8)
                            }}>8
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(7)
                            }}>7
                            </div>
                            <div className="number  yellow" onClick={() => {
                                this.buttonPressed('×')
                            }}>×
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(6)
                            }}>6
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(5)
                            }}>5
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(4)
                            }}>4
                            </div>
                            <div className="number  yellow" onClick={() => {
                                this.buttonPressed('-')
                            }}>-
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(3)
                            }}>3
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(2)
                            }}>2
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(1)
                            }}>1
                            </div>
                            <div className="number  yellow" onClick={() => {
                                this.buttonPressed('+')
                            }}>+
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed(0)
                            }}>0
                            </div>
                            <div className="number offwhite" onClick={() => {
                                this.buttonPressed('.')
                            }}>.
                            </div>

                            <div className="number  blue equal" onClick={() => {
                                this.compute()
                            }}>=
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        );


    }
}


export default App;
