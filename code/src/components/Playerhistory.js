import React from 'react'
import { useSelector } from 'react-redux'
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