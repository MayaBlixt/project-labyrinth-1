import React  from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Container, Paper } from '@material-ui/core'
import styled from 'styled-components'

import { game } from '../src/reducers/game'
import { ui } from '../src/reducers/ui'
import { StartButton } from 'components/StartButton'
import { StartGame } from 'components/StartGame'
import { Playerposition } from 'components/Playerposition'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { Playerhistory } from 'components/Playerhistory'


const reducer = combineReducers ({ 
  game: game.reducer,
  ui: ui.reducer 
})
const store = configureStore({ reducer })

const MyPaper = styled(Paper)`
&& {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top:30px;
}`; 
 

export const App = () => {


  return (
    <Provider store={store}>
    <Container maxWidth= "xs">
    <MyPaper>
     <StartButton /> 
     <StartGame />
     {/* <LoadingIndicator /> */}
     </MyPaper>
     <Paper>
     <Playerposition/>
     <LoadingIndicator />
     <Playerhistory/>
     </Paper>
     </Container>
    </Provider>
  )
}
