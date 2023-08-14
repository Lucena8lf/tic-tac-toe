import { checkWinner } from "./checkWinner";
import { TURNS } from "../constants";
import confetti from "canvas-confetti";

/*
  Función que ocurre al pinchar en cada cuadro (actualiza el tablero)
    - index: posición de la casilla seleccionada por el jugador
  */
export const updateBoard = (
  index,
  board,
  turn,
  winner,
  setBoard,
  setTurn,
  setWinner
) => {
  // Si la posición indicada está rellena no hacemos nada
  if (board[index] || winner) return;

  // Actualizamos el tablero según el turno
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);

  // Actualizamos el turno
  const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
  setTurn(newTurn);

  // Revisamos si tenemos ganador
  // Para que haya un ganador mínimo se deben haber realizado 5 movimientos
  const moves = newBoard.filter((cell) => cell);
  if (moves.length >= 5) {
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (!newBoard.includes(null)) {
      // Comprobamos si ha habido empate
      setWinner(false);
    }
  }
};
