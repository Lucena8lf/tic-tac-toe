import PropTypes from "prop-types";

export const Square = ({
  children,
  isSelected,
  isWinner,
  updateBoard,
  index,
}) => {
  const className = `square ${isSelected ? "is-selected" : ""} ${
    isWinner ? "is-winner" : ""
  }`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  isWinner: PropTypes.bool,
};
