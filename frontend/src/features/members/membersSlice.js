import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import memberService from './memberService'

const initialState = {
  members: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get user members
export const getMembers = createAsyncThunk(
  'members/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await memberService.getMembers(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.members = action.payload
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = memberSlice.actions
export default memberSlice.reducer