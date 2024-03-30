import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' // Assuming you have a user slice reducer

const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
})

export default store
