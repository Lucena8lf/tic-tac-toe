import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

// Turnos
const TURNS = {
  X: "x",
  O: "o",
};

// Combinaciones ganadoras
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Componente para cada cuadrado
const Square = ({ children, isSelected, isWinner, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""} ${
    isWinner ? "is-winner" : ""
  }`;

  const handleClick = () => {
    // Por ahora al hacer click en el recuadro solo llamamos a la función 'updateBoard'
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado de los turnos
  const [turn, setTurn] = useState(TURNS.X);

  // Estado para el ganador
  const [winner, setWinner] = useState(null);

  /*
  Función para detectar el ganador
    - board: tablero que debemos revisar para comprobar si hay ganador
  */
  const checkWinner = (board) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;

      if (board[a] && board[a] == board[b] && board[a] == board[c]) {
        return board[a];
      }
    }
    return null;
  };

  /*
  Función para volver a empezar una nueva partida
  */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  /*
  Función que ocurre al pinchar en cada cuadro (actualiza el tablero)
    - index: posición de la casilla seleccionada por el jugador
  */
  const updateBoard = (index) => {
    // Si la posición indicada está rellena no hacemos nada
    if (board[index] || winner) return;

    // Actualizamos el tablero según el turno
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    console.log(newBoard);

    // Actualizamos el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisamos si tenemos ganador
    // Para que haya un ganador mínimo se deben haber realizado 5 movimientos
    const moves = newBoard.filter((cell) => cell);
    if (moves.length >= 5) {
      const newWinner = checkWinner(newBoard);
      console.log(`Devuelvo ${newWinner}`);
      if (newWinner) {
        setWinner(newWinner);
      } else if (!newBoard.includes(null)) {
        // Comprobamos si ha habido empate
        setWinner(false);
      }
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar una nueva partida</button>
      <section className="game">
        {board.map((cell, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {cell}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Empate" : "Ganador:"}</h2>

            {winner && (
              <header className="win">
                <Square isWinner>{winner}</Square>
              </header>
            )}

            <footer>
              <button onClick={resetGame}>Empezar una nueva partida</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  isWinner: PropTypes.bool,
};

export default App;
