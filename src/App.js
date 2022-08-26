import './App.css';
import Game from './TicTakToe';
import Controls from './Controls';
import TodoControls from './TodoControls';
import Check from './Check';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tak Toe</h1>
      {/* <Game /> */}
      {/* <Controls /> */}
      {/* <TodoControls /> */}
      <Check />
        
      </header>
    </div>
  );
}

export default App;
