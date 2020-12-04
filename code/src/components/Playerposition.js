import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector } from 'react-redux'
import { LoadingIndicator } from './LoadingIndicator';

export const Playerposition = () => {
    const startPosition = useSelector( store => store.game.currentPosition.coordinates);

    let coordinates = [0,0]

    if(startPosition) {coordinates = startPosition.split(",")
    coordinates[0] = parseInt(coordinates[0])
    coordinates[1] = parseInt(coordinates[1])
    }
    

     const MyPosition = styled.div`
     border: 2px solid;
     height: 100px;
     width: 100px;
     position: absolute;
     top: ${800 - coordinates[1]*100}px;
     left: ${400 + coordinates[0]*100}px;
     `
    
    // const move = keyframes`
    
    // transform: translate(50px, 100px);
    // `
    
    // const MySpan = styled.span`
    // animation: ${move} 2s linear infinite;
    // `


    // const move = keyframes`
    // from {
    //     transform: translate(${400 + coordinates[0]*100 - 100}px, ${150 + coordinates[1]*100 - 100}px);
    // }
    // to {
    //     transform: translate(${400 + coordinates[0]*100}px, ${150 + coordinates[1]*100}px);
    // }
    // `


    // const MyLoadingIndicator = styled.div`
    // display: inline-block;
    // animation: ${move} 1s;
    // `


    return(
        <MyPosition>
            <span role="img" aria-label="location">❌</span>
        </MyPosition>
    )

}