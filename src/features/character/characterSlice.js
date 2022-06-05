import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../services/api/breakingBadApi';

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacter',
  async () => {
    const res = await baseUrl.get('characters');
    return res;
  }
);
export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.data;
    },
    [fetchCharacters.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.statusCode;
    },
  },
});

export default characterSlice.reducer;
