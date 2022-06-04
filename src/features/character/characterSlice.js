import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../services/api/breakingBadApi';

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacter',
  async () => {
    const { data } = await baseUrl.get('characters');
    return data;
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
      state.list = payload;
    },
    [fetchCharacters.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default characterSlice.reducer;
