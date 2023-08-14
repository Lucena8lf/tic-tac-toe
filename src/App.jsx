import { useState } from "react";
import "./App.css";

import { Square } from "./components/Square";
import { Board } from "./components/Board";
import { WinnerModal } from "./components/WinnerModal";

import { TURNS } from "./constants";

import { resetGame } from "./utils/resetGame";
import { updateBoard } from "./utils/updateBoard";

function App() {
  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado de los turnos
  const [turn, setTurn] = useState(TURNS.X);

  // Estado para el ganador
  const [winner, setWinner] = useState(null);

  const handleResetGame = () => {
    resetGame(setBoard, setTurn, setWinner);
  };

  const handleUpdateBoard = (index) => {
    updateBoard(index, board, turn, winner, setBoard, setTurn, setWinner);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={handleResetGame}>Empezar una nueva partida</button>

      <Board board={board} handleUpdateBoard={handleUpdateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} handleResetGame={handleResetGame} />
    </main>
  );
}

export default App;
