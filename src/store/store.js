import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import videoSlice from './slices/videoSlice'

const store=configureStore({
   reducer:{
       
       user:userSlice,
       video:videoSlice
   }
})
export default store