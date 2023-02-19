import React from 'react'
import { Button, Box, Grid } from '@mui/material';
interface ButtonType {
    onClick:any;
    buttonText:string[];
    cancel:any;
    gameMode:number;
}
enum GameMode {
    VERB,
    DIRECTION
  }
export const Buttons = ({onClick,buttonText,cancel,gameMode}:ButtonType) => {
  return (
    <>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            {buttonText.map((t:string,i:number)=>(
                <Button 
                variant="contained" 
                color="primary" 
                onClick={() => onClick(t)}
                key={i}
                >{t}
                </Button>
            ))}
            {gameMode !== GameMode.VERB && 
            <Button 
            variant="contained" 
            color="primary" 
            onClick={() => cancel()}>Cancel</Button>
            }
        </Box>
    </>
  )
}

