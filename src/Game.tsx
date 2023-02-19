import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import {Buttons} from './Buttons'
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
    setGameMode(nextMode);
    setGameState(newGameState);
    setGameResponse(response);
  }

  function handleDirectionClick(direction: string) {
    // Handle direction selection here
    const { newGameState, response, nextMode } = handleDirectionSelection(direction, gameState);
    setGameMode(nextMode);
    setGameState(newGameState);
    setGameResponse(response);
  }

  function handleCancelClick() {
    setGameMode(GameMode.VERB);
  }

  function handleVerbSelection(verb: string, gameState: GameState): 
  { newGameState: GameState, response: string, nextMode: GameMode } {
    // Implement verb selection here
    return {
      newGameState: gameState,
      response: `You selected the verb "${verb}"`,
      nextMode: GameMode.DIRECTION
    };
  }
  
  function handleDirectionSelection(direction: string, gameState: GameState): 
  { newGameState: GameState, response: string, nextMode: GameMode } {
    // Implement direction selection here
    return {
      newGameState: gameState,
      response: `You travel "${direction}"`,
      nextMode: GameMode.VERB
    };
  }

  return (
    <>
      <Box alignItems="center" sx={{ position: 'fixed', top: "50vh", left: 0, width: '100%', zIndex: 1 }}>
        <Box textAlign="center" sx={{ pt:"10px", border: 1, height:"16vh"}} >
          {gameResponse}
        </Box>
      </Box>
<Box sx={{ position: 'fixed', top: "70vh", left: 0, width: '100%', zIndex: 1 }}>
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    {gameMode === GameMode.VERB && (
      <Buttons
        onClick={handleVerbClick}
        buttonText={['go', 'look', 'take', 'use']}
        gameMode={gameMode}
        cancel={handleCancelClick}
      />
    )}
    {gameMode === GameMode.DIRECTION && (
      <Buttons
        onClick={handleDirectionClick}
        buttonText={['north', 'south', 'east', 'west']}
        gameMode={gameMode}
        cancel={handleCancelClick}
      />
    )}
  </Box>
</Box>
    </>
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
