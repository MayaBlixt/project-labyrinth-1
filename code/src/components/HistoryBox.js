import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { StartGame } from './StartGame'

export const HistoryBox = ({ inputCoordinates }) => {

    let coordinates = [0,0]

    if(inputCoordinates) {coordinates = inputCoordinates.split(",")
    coordinates[0] = parseInt(coordinates[0])
    coordinates[1] = parseInt(coordinates[1])
    }
    

    const MyPosition = styled.div`
    border: 2px solid;
    background-color: grey;
    height: 100px;
    width: 100px;
    position: absolute;
    top: ${800 - coordinates[1]*100}px;
    left: ${400 + coordinates[0]*100}px;
    `


    return(
        <MyPosition>
         💪
        </MyPosition>
    )

}