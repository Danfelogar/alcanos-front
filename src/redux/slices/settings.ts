import { AppDispatch, RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  isOpenModal: boolean
}

const initialState: SettingsState = {
  isOpenModal: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload
    },
  },
})

export const { setIsOpenModal } = settingsSlice.actions

export const toggleModal =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    return dispatch(setIsOpenModal(!getState().settings.isOpenModal))
  }

export default settingsSlice.reducer
