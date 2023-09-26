import { combineReducers } from '@reduxjs/toolkit'
import settings from './slices/settings'

export const rootReducer = combineReducers({
  settings,
})
