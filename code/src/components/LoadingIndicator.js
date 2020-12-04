import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { DirectionsRun as Runner } from '@material-ui/icons/';
import styled, { keyframes } from 'styled-components'

export const LoadingIndicator = () =>{
    const isLoading = useSelector((state) => state.ui.isLoading); 

    const startPosition = useSelector( store => store.game.currentPosition.coordinates);
    const lastPosition = useSelector( store => store.game.previousPosition.coordinates);

    let currentCoordinates = [0,0]

    if(startPosition) {currentCoordinates = startPosition.split(",")
    currentCoordinates[0] = parseInt(currentCoordinates[0])
    currentCoordinates[1] = parseInt(currentCoordinates[1])
    }

    let lastCoordinates = [0,0]

    if(lastPosition) {lastCoordinates = lastPosition.split(",")
    lastCoordinates[0] = parseInt(lastCoordinates[0])
    lastCoordinates[1] = parseInt(lastCoordinates[1])
    }

    const direction = [currentCoordinates[0] - lastCoordinates[0], currentCoordinates[1] - lastCoordinates[1]]
    console.log(direction)
    //console.log(direction[0]*100)
    //console.log(direction[1]*100)

    const move = keyframes`
    
    from {
        transform: translate(0px, 0px);
    }
    to {
        transform: translate(${direction[0]*100}px, ${direction[1]*100}px); 
    }
    `

    const MyLoadingIndicator = styled(Runner)`
    position: absolute;
    top: ${800 - currentCoordinates[1]*100}px;
    left: ${400 + currentCoordinates[0]*100}px;
    animation: ${move} 2s;
    `
return (
    <>
    {isLoading &&  <MyLoadingIndicator />}
    </>
)
}