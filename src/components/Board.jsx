import { Square } from "./Square";

import PropTypes from "prop-types";

export const Board = ({ board, handleUpdateBoard }) => {
  return (
    <section className="game">
      {board.map((cell, index) => {
        return (
          <Square key={index} index={index} updateBoard={handleUpdateBoard}>
            {cell}
          </Square>
        );
      })}
    </section>
  );
};

Board.propTypes = {
  board: PropTypes.array,
  handleUpdateBoard: PropTypes.func,
};
