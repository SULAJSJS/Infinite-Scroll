import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// https://api.football.kg/api/v1/tables/chess/

export const fetchPlayers = createAsyncThunk('players/fetchPayers', async (limit, offset) => {
  const response = await fetch(`https://api.football.kg/api/v1/users/players/?limit=${limit}&offset=${offset}`,)
  .then((res) => {return res.json();});
  return response;
});

const initialState = {
  data: [],
  isError: false,
  isLoading: true,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchPlayers.fulfilled.type]: (state, action) => {
      state.data = action.payload.results;
    },
    [fetchPlayers.rejected.type]: (state) => {
      state.isError = true;
      state.isLoading = true;
    },
    [fetchPlayers.pending]: (state) => {
      state.isError = false;
      state.isError = false;
    },
  },
});

export const { setData } = playersSlice.actions;
export default playersSlice.reducer;
