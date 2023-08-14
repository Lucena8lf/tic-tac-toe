import { Square } from "./Square";

import PropTypes from "prop-types";

export const WinnerModal = ({ winner, handleResetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "¡Empate!" : "Ganador:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {winner && (
          <header className="win">
            <Square isWinner>{winner}</Square>
          </header>
        )}

        <footer>
          <button onClick={handleResetGame}>Empezar una nueva partida</button>
        </footer>
      </div>
    </section>
  );
};

WinnerModal.propTypes = {
  winner: PropTypes.string,
  handleResetGame: PropTypes.func,
};
