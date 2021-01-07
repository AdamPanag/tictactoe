import React from 'react';
import Square from './Square';
import Button from './Square';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div className="board-row">
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div className="board-row">
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </div>
  );
};

export default Board;
