import './App.css';
import Game from './TicTakToe';
import Controls from './Controls';
import TodoControls from './TodoControls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tak Toe</h1>
      {/* <Game /> */}
      <Controls />
      {/* <TodoControls /> */}
        
      </header>
    </div>
  );
}

export default App;
