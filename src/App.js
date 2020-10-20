import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';
import Gameboard from './components/modules/Gameboard';
import Player from './components/modules/Player';
import Ship from './components/modules/Ship';
import shipLengths from './components/modules/shipLengths';

function App() {

  const [p1Board, setP1Board] = useState(Gameboard([]));
  const [p2Board, setP2Board] = useState(Gameboard([]));
  const [p1, setP1] = useState(Player('human', p1Board, p2Board));
  const [p2, setP2] = useState(Player('cpu', p2Board, p1Board));
  const [p1Grid, setP1Grid] = useState([]);
  const [p2Grid, setP2Grid] = useState([]);
  const [p1Sinks, setP1Sinks] = useState(0);
  const [direction, setDirection] = useState('horizontal');
  const [instruction, setInstruction] = useState('Place your ship (on the left board): 5 length');

  const resetGame = () => {
    window.location.reload(false);
  }

  const p1GridClick = (e) => {
    const [x, y] = [parseInt(e.target.id[0]), parseInt(e.target.id[1])]
    if (p1.getBoard().getShips().length < 9) {
      if (shipLengths.length > 0) {
        if (p1Board.placeShip(x, y, shipLengths[0], direction) === 'placed') {
          shipLengths.shift();
          renderP1Board();
          if (shipLengths.length > 0) {
            setInstruction(`Place your ship (on the left board): ${shipLengths[0]} length`)
          } else {
            const btn = document.querySelector(".rotate-btn");
            btn.parentNode.removeChild(btn);
            setInstruction(`Make guesses on the right board:`)
            p2.cpuPlaceShips();
            console.log(p2.getBoard().getGrid());
            setP2Board(p2.getBoard());
            renderP2Board();
          }
        }
      }
    }
  }

  useEffect(() => {
    renderP1Board();
  }, [direction]);

  useEffect(() => {
    p2.cpuPlaceShips();
    p2Board.getGrid();
    renderP2Board();
  }, [])

  const flipDirection = () => {
    direction === 'horizontal' ? setDirection('vertical') : setDirection('horizontal');
  }

  const renderP1Board = () => {
    const newP1Grid = [];
    for(let i = 0;  i < 10 ; i++) {
      for(let j = 0; j < 10; j++) {
        const coords = p1Board.getCoords(j, i);
        if (coords === '') {
          newP1Grid.push(<div className="cell" key={`p1 ${j}, ${i}`} id={j + '' + i} onClick={p1GridClick}></div>);
        } else if (coords === 'X') {
          newP1Grid.push(<div className="cell attacked" key={`p1 ${j}, ${i}`} id={j + '' + i} ></div>);
        } else if (coords === 'XX') {
          newP1Grid.push(<div className="cell hit" key={`p1 ${j}, ${i}`} id={j + '' + i} ></div>);
        } else {
          newP1Grid.push(<div className="cell p1-ship" key={`p1 ${j}, ${i}`} id={j + '' + i} onClick={p1GridClick}></div>);
        }
      }
    }
    setP1Grid(newP1Grid);
  }

  const p1Guess = () => {
    p2.makeRandomPlay()
    if (p1.getBoard().checkForWin()) {
      setInstruction('CPU wins!');
    }
    renderP1Board();
  }

  const p2Guess = (e) => {
    if (p1.getBoard().getShips().length < 9) return;
    const target = e.target.id;
    target.split('');
    const [x, y] = [target[0], target[1]];
    // console.log(p2Board.receiveAttack(x, y));
    if (p2Board.receiveAttack(x, y) === 'sunk') setP1Sinks(prevNum => prevNum + 1);
    if (p2.getBoard().checkForWin()) {
      renderP2Board();
      setInstruction('Player 1 wins!');
    } else {
      renderP2Board();
      p1Guess();
    }
  }

  const renderP2Board = () => {
    const newGrid = [];
    for(let i = 0;  i < 10 ; i++) {
      for(let j = 0; j < 10; j++) {
        const coords = p2Board.getCoords(j, i);
        if (coords === 'X') {
          newGrid.push(<div className="cell attacked" key={`p1 ${j}, ${i}`} id={j + '' + i}></div>);
        } else if (coords === 'XX') {
          newGrid.push(<div className="cell hit" key={`p1 ${j}, ${i}`} id={j + '' + i}></div>);
        } else {
          newGrid.push(<div className="cell" key={`p1 ${j}, ${i}`} id={j + '' + i} onClick={p2Guess}></div>);
        }
      }
    }
    setP2Grid(newGrid);
  } 

  return (
    <div className="App">
      <Header />
      <div className="instructions">
        <p>{instruction}</p>
        <p>Ships Sunk: {p1Sinks}</p>
        <button className="rotate-btn" onClick={flipDirection}>Ship is: {direction}. Click to rotate.</button><br />
        <button className="reset-btn" onClick={resetGame}>Restart</button>
      </div>
      <div className="player-grids-container">
        <div className="board-grid">
          {p1Grid}
        </div>
        <div className="board-grid">
          {p2Grid}
        </div>
      </div>
    </div>
  );
}

export default App;
