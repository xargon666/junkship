import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';

interface GameState {
  // Define the game state here
}

enum GameMode {
  VERB,
  DIRECTION
}

function Game() {
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.VERB);
  const [gameState, setGameState] = useState<GameState>({});
  const [gameResponse, setGameResponse] = useState<string>('');

  function handleVerbClick(verb: string) {
    // Handle verb selection here
    const { newGameState, response, nextMode } = handleVerbSelection(verb, gameState);


    setGameState(newGameState);
    setGameMode(nextMode);
    setGameResponse(response);
  }

  function handleDirectionClick(direction: string) {
    // Handle direction selection here
    const { newGameState, response, nextMode } = handleDirectionSelection(direction, gameState);

    setGameState(newGameState);
    setGameMode(nextMode);
    setGameResponse(response);
  }

  function handleCancelClick() {
    setGameMode(GameMode.VERB);
  }

  function handleVerbSelection(verb: string, gameState: GameState): { newGameState: GameState, response: string, nextMode: GameMode } {
    // Implement verb selection here
    return {
      newGameState: gameState,
      response: `You selected the verb "${verb}"`,
      nextMode: GameMode.DIRECTION
    };
  }
  
  function handleDirectionSelection(direction: string, gameState: GameState): { newGameState: GameState, response: string, nextMode: GameMode } {
    // Implement direction selection here
    return {
      newGameState: gameState,
      response: `You selected the direction "${direction}"`,
      nextMode: GameMode.VERB
    };
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
            

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
            {gameMode === GameMode.VERB && (
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button variant="contained" color="primary" onClick={() => handleVerbClick('go')}>Go</Button>
                <Button variant="contained" color="primary" onClick={() => handleVerbClick('look')}>Look</Button>
                <Button variant="contained" color="primary" onClick={() => handleVerbClick('take')}>Take</Button>
                </Box>
            )}
            {gameMode === GameMode.DIRECTION && (
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Button variant="contained" color="primary" onClick={() => handleDirectionClick('north')}>North</Button>
                <Button variant="contained" color="primary" onClick={() => handleDirectionClick('east')}>East</Button>
                <Button variant="contained" color="primary" onClick={() => handleDirectionClick('south')}>South</Button>
                <Button variant="contained" color="primary" onClick={() => handleDirectionClick('west')}>West</Button>
                <Box mt={1}>
                    <Button variant="contained" color="secondary" onClick={handleCancelClick}>Cancel</Button>
                </Box>
                </Box>
            )}
            <Box mt={1} textAlign="center">
                {gameResponse}
            </Box>
            </Box>
        </Grid>
    </Grid>
  );
}

export default Game;

// Declare the interface for the JSX elements in the component
declare global {
    namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    }
  }
}  
