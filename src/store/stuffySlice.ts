import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./index"
import { Stuffy, buildGetStuffy } from "./asyncActions"

export interface stuffyState {
  stuffy: Stuffy | null
  fetchStatus: "initial" | "pending" | "success" | "error"
  error: string | null | unknown
  isExceeds: boolean
}
const initialState: stuffyState = {
  stuffy: null,
  fetchStatus: "initial",
  error: null,
  isExceeds: false,
}
const stuffySlice = createSlice({
  name: "stuffy",
  initialState,
  reducers: {
    setExceeding: (state, action: PayloadAction<boolean>) => {
      state.isExceeds = action.payload
    },
  },
  extraReducers: (builder) => {
    buildGetStuffy(builder)
  },
})

export const { setExceeding } = stuffySlice.actions
export default stuffySlice.reducer

export const selectIsExceeds = (state: RootState) => state.stuffy.isExceeds
export const selectStuffy = (state: RootState) => state.stuffy.stuffy
export const selectFetchStatus = (state: RootState) => state.stuffy.fetchStatus
