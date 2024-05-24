import React, { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currTurn, setCurrTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const winnerLogic = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const handleClick = (index:number) => {
    const stateCopy = [...state];
    if (state[index] !== null) {
      return;
    }
    stateCopy[index] = currTurn;
    const win = checkWinner(stateCopy);
    if(win)
      alert(`${currTurn} has won the game`);
    setCurrTurn(currTurn === "X" ? "O" : "X");
    setState(stateCopy);
  }

  return (
    <div className="game">
      <h1 className="game-name">Tic Tac Toe</h1>
      <div className="board">
        <div className="row" > 
          <Block onClick={() => handleClick(0)} value={state[0]} />
          <Block onClick={() => handleClick(1)} value={state[1]} />
          <Block onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="row"> 
          <Block onClick={() => handleClick(3)} value={state[3]} />
          <Block onClick={() => handleClick(4)} value={state[4]} />
          <Block onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="row"> 
          <Block onClick={() => handleClick(6)} value={state[6]} />
          <Block onClick={() => handleClick(7)} value={state[7]} />
          <Block onClick={() => handleClick(8)} value={state[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;
