import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { StartGame } from './StartGame'
import { HistoryBox } from './HistoryBox'

export const Playerhistory = () => {

    const position = useSelector( store => store.game.position);


    return(
        <>
        {position.slice(0, position.length - 1).map(item => 
          <HistoryBox inputCoordinates={item.coordinates}></HistoryBox>  
            )}
        </>
    )
}