import { WINNING_COMBINATIONS } from "../constants";

/*
  Función para detectar el ganador
    - board: tablero que debemos revisar para comprobar si hay ganador
*/
export const checkWinner = (board) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (board[a] && board[a] == board[b] && board[a] == board[c]) {
      return board[a];
    }
  }
  return null;
};
