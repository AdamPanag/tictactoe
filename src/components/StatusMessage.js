import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => {
    return el !== null;
  });

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && 'Draw'}
    </div>
  );
};

export default StatusMessage;
