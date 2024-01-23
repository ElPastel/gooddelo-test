import { createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { stuffyState } from "./stuffySlice"

export interface Stuffy {
  co2: number
  temp: number
}

export const getStuffy = createAsyncThunk(
  "stuffy/getStuffy",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://dushnila.gooddelo.com/data")

      return (await res.json()) as Stuffy
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const buildGetStuffy = (builder: ActionReducerMapBuilder<stuffyState>) =>
  builder
    .addCase(getStuffy.pending, (state) => {
      state.fetchStatus = "pending"
    })
    .addCase(getStuffy.fulfilled, (state, action) => {
      state.fetchStatus = "success"
      state.stuffy = action.payload
      state.isExceeds = action.payload.co2 > 800 || action.payload.temp > 27
      state.error = null
    })
    .addCase(getStuffy.rejected, (state, action) => {
      state.fetchStatus = "error"
      state.error = action.payload
    })
