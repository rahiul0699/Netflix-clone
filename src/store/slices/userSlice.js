import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        plan:null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.user=null
        },
        setPlan:(state,action)=>{
            state.plan=action.payload
        }
        
    }
})

export const {login,logout,setPlan} =userSlice.actions
export default userSlice.reducer