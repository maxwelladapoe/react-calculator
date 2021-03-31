import React from 'react';
import './App.scss';

function App() {



    return (
        <div className="App">
            <header className="App-header">

                <div className="calculator-wrap">
                    <div className='screen'>
                        <div className='input-stream'></div>
                        <div className='compute'></div>
                    </div>
                    <div className='numbers-wrap'>
                        <div className="number ">CE</div>
                        <div className="number ">C</div>
                        <div className="number "> B </div>
                        <div className="number shadow yellow"> ÷ </div>
                        <div className="number shadow">9</div>
                        <div className="number shadow">8</div>
                        <div className="number shadow">7</div>
                        <div className="number shadow yellow">x</div>
                        <div className="number shadow">6</div>
                        <div className="number shadow">5</div>
                        <div className="number shadow">4</div>
                        <div className="number shadow yellow">-</div>
                        <div className="number shadow">3</div>
                        <div className="number shadow">2</div>
                        <div className="number shadow">1</div>
                        <div className="number shadow yellow">+</div>
                        <div className="number shadow">0</div>
                        <div className="number shadow">.</div>
                        <div className="number shadow">+-</div>
                        <div className="number shadow blue">=</div>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
