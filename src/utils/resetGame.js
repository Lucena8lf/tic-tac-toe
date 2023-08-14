import { TURNS } from "../constants";

/*
  Función para volver a empezar una nueva partida
  */
export const resetGame = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.x);
  setWinner(null);
};
