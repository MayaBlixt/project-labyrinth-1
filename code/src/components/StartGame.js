import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ui } from 'reducers/ui'
import { game } from 'reducers/game'
import { ArrowBack as West, ArrowForward as East, ArrowUpward as North, ArrowDownward as South } from '@material-ui/icons/';
import { Button, ButtonGroup, Paper } from '@material-ui/core'

import { fetchMove } from 'reducers/game'

export const StartGame = () => {
    const startPosition = useSelector( store => store.game);
    const dispatch = useDispatch()

   

    const handleFirstMove = (type, direction) => {
        dispatch(fetchMove(startPosition.user.username, type, direction))
        
    }

    return (
        <>
        {startPosition.currentPosition.description && (
        <Paper>
            <p> Description: {startPosition.currentPosition.description}</p>
            <p> Coordinates: {startPosition.currentPosition.coordinates}</p>
              <ButtonGroup fullWidth variant='contained'>{startPosition.currentPosition.actions.map((item, index) => {
                  let buttonDir = null
                  switch(item.direction){
                    case 'East': buttonDir=<East/>
                      break;
                    case 'West': buttonDir=<West/>
                      break;
                    case 'North': buttonDir=<North/>
                      break;
                    case 'South': buttonDir=<South/>
                      break;
                    default:
                    
                  }
                  return(
                    <Button
                      variant='contained'
                      startIcon={buttonDir}
                        size='small'
                      type='button' 
                      onClick={() => handleFirstMove(item.type, item.direction)}>{item.direction}
                      </Button>)
              })}
              {startPosition.currentPosition.coordinates === "1,3" && <Button  
              type='button'
              variant='contained' 
              onClick={() => {dispatch(ui.actions.restart())
             dispatch(game.actions.restart())}
            }>Restart game</Button>}
              </ButtonGroup>  
        </Paper>)}</>
        // <div>
        //     {startPosition.position.map((item, index) => (
        //     <>
        //     <p key={index}> Description: {item.description}</p>
        //     <p key={index}> Coordinates: {item.coordinates}</p>
        //       <div>{item.actions.map((item, index) => (
        //             <button type='button' onClick={() => handleFirstMove(item.type, item.direction)}>{item.direction}</button>
        //         ))}</div>  
        //     </>))}
        // </div>
     
    )

}