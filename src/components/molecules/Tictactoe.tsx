'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TicTacToe(){
  const [board, setBoard] = React.useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = React.useState<boolean>(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index: number) => (
    <Button
      variant="outlined"
      size="large"
      style={{ width: '50px', height: '50px' }}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
      return 'Draw';
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tic-Tac-Toe
      </Typography>
      <div>
        <div className="status">{getStatus()}</div>
        <div className="board">
          <Grid container spacing={1}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Grid item xs={4} key={index}>
                {renderSquare(index)}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

