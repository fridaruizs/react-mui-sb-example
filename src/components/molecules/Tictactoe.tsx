'use client'
import * as React from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Alert, Collapse } from '@mui/material';

export default function TicTacToe(){
  const [board, setBoard] = React.useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = React.useState<boolean>(true);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner || showAlert) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  
    const newWinner = calculateWinner(newBoard);
  
    if (newWinner || newBoard.every((square) => square)) {
      setShowAlert(true);
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
    setShowAlert(false);
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

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    subtitle: {
      paddingBottom: 3
    },
    alert: {
      marginTop: 10,
    },
    button: {
      marginTop: 4,
      color: 'primary.dark',
      backgroundColor: 'primary.light',
    }
  }

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
    <Box sx={styles.container}>
      <Typography variant="h4" gutterBottom>
        Little two-player tictactoe
      </Typography>
      <Box>
        <Box className="status" sx={styles.subtitle}>{getStatus()}</Box>
        <Collapse in={showAlert}>
          <Alert severity="success" sx={styles.alert}>
            {winner ? `${winner} wins!` : "It's a draw!"}
          </Alert>
        </Collapse>
        <Box className="board">
          <Grid container spacing={1} rowSpacing={0}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Grid item xs={4} key={index}>
                {renderSquare(index)}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Button variant="contained" onClick={handleRestart} sx={styles.button}>Restart</Button>
      </Box>
    </Box>
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
