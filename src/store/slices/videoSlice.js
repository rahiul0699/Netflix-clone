import {createSlice} from '@reduxjs/toolkit'

const videoSlice=createSlice({
    name:"video",
    initialState:{
        video:null
    },
    reducers:{
        setVideo:(state,action)=>{
            state.video=action.payload
        },
        resetVideo:(state,action)=>{
            state.video=null
        }
    }
})

export const {setVideo,resetVideo} =videoSlice.actions
export default videoSlice.reducer