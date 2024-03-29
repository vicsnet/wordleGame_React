import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './components/Words';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1> wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <div className='game'>

      <Board />
      <Keyboard />
        </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
