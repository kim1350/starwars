import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axiosInstance from '../hooks/api';
import {Person} from '../types/Person';
interface PersonThunk {
  results: Person[];
  count: number;
  next: string;
  previous: string;
}

export const getPersons = createAsyncThunk<
  PersonThunk,
  number,
  {rejectValue: string}
>('person/getPersons', async (page, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.get(`/people/?page=${page}`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || 'Ошибка при загрузке данных',
    );
  }
});

interface personSilce {
  data: Person[];
  loadData: boolean;
  error: string | null;
  count: number;
}
const initialState: personSilce = {
  data: [],
  loadData: false,
  error: null,
  count: 0,
};
const presonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addDataActivity(state, action: PayloadAction<any>) {
      if (action.payload.meta.current_page === 1) {
      } else {
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPersons.pending, state => {
        state.loadData = true;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.count = action.payload.count;
        if (action.meta.arg == 1) {
          state.data = action.payload.results;
        } else {
          state.data = [...state.data, ...action.payload.results];
        }

        state.loadData = false;
      })
      .addCase(getPersons.rejected, (state, action) => {
        state.error = action.payload ?? 'Неизвестная ошибка';
      });
  },
});
export const {addDataActivity} = presonSlice.actions;

export default presonSlice.reducer;
