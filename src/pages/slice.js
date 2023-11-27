// counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataAdmin, fetchDataFromApi, updateDataAdmin } from './api';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
  admindata:null,
};

export const fetchData = createAsyncThunk('admin/fetchData', async (payload) => {
  try {
    const data = await fetchDataFromApi(payload);
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchAdmin = createAsyncThunk('fetchadmin/data', async () => {
  try {
    const data = await fetchDataAdmin();
    return data;
  } catch (error) {
    throw error;
  }
});
export const updateAdmin = createAsyncThunk('updateadmin/data', async (payload) => {
  try {
    const data = await updateDataAdmin(payload);
    return data;
  } catch (error) {
    throw error;
  }
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        localStorage.setItem('token',action.payload.data.token)
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        state.admindata = action.payload.data.amount;
      })
      .addCase(fetchAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(updateAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        state.admindata = action.payload.data.amount;
      })
      .addCase(updateAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { } = counterSlice.actions;
export default counterSlice.reducer;
