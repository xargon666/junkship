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
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width='100%'>
        <Grid container spacing={1} >
            {buttonText.map((t:string,i:number)=>(
                buttonText.length >= 4 ? 
                <Grid item xs={6} key={i}> 
                    <Button 
                        sx={{ width: '100%' }}
                        fullWidth
                        variant="contained" 
                        color="primary" 
                        onClick={() => onClick(t)}
                        >{t}
                    </Button>
                </Grid>
                : 
                <Grid item xs={12} key={i}> 
                    <Button 
                        sx={{ width: '100%' }}
                        fullWidth
                        variant="contained" 
                        color="primary" 
                        onClick={() => onClick(t)}
                        >{t}
                    </Button>
                </Grid>
            ))}
            {gameMode !== GameMode.VERB && 
            <Grid item xs={12}>
                <Button 
                    sx={{ width: '100%' }}
                    fullWidth
                    variant="contained" 
                    color="secondary" 
                    onClick={() => cancel()}
                >Cancel</Button>
                </Grid>
            }
            </Grid>
        </Box>
    </>
  )
}

