import { createSlice } from "@reduxjs/toolkit"

import { ui } from './ui'

const initialGame = {user:
    { username: "" },
    currentPosition:{},
    previousPosition:{},
    position:[]
}
    
export const game = createSlice({
    name: "game",
    initialState: initialGame,
    reducers: {
        startGame: (state, action) => {
        state.user.username = action.payload.username
        if(state.previousPosition.coordinates !== action.payload.json.coordinates) {state.previousPosition = state.currentPosition
            state.position = [...state.position, action.payload.json]}
        else if(state.position.length === 1)
            state.position = []
        else 
            state.position = state.position.slice(0,state.position.length - 2)
        state.currentPosition = {...action.payload.json}

        
        //if(state.currentPosition !== state.position[state.position.length - 1])  
        
        // if(state.position.length > 2) {
        //     console.log(state.position[state.position.length - 3].coordinates)
        // if(state.currentPosition.coordinates == state.position[state.position.length - 3].coordinates) console.log('working')    }
     
          
        },
        restart: () => {
            return initialGame
        }
    }
})

//Create fetchMove function to let user move in the pyramid

export const fetchStart = (username) => {

    return(dispatch) => {
    
    dispatch(ui.actions.setLoading(true))
    dispatch(ui.actions.setStarted(true))          
    fetch('https://wk16-backend.herokuapp.com/start',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username: username }),
        })
        .then(result => result.json())
        .then((json) => {
            
            dispatch(game.actions.startGame({json, username}))
            dispatch(ui.actions.setLoading(false))  
        })   

    }
}

export const fetchMove = (username, type, direction) => {
    /* const gameUser = useSelector(store => store.user) */
     
     return(dispatch) => {
     dispatch(ui.actions.setLoading(true))         
     fetch('https://wk16-backend.herokuapp.com/action',{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify({ username , type , direction}),
         })
         .then(result => result.json())
         .then((json) => {
             dispatch(game.actions.startGame({json, username}))
             dispatch(ui.actions.setLoading(false))  
         })   
 
     }
 }
 
 
 
 
