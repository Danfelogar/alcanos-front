// import { rootSaga } from './rootSaga'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  devTools: true,
})

// sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
