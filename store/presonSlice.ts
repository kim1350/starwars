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

    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || 'Ошибка при загрузке данных',
    );
  }
});

interface personSilce {
  data: Person[];
  fiterData: Person[];
  loadData: boolean;
  error: string | null;
  next: string | null;
}
const initialState: personSilce = {
  data: [],
  fiterData: [],
  loadData: false,
  error: null,
  next: null,
};
const presonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    filterPersons(state, action: PayloadAction<string>) {
      const eyeColor = action.payload;
      if (eyeColor === 'all') {
        state.fiterData = state.data;
      } else {
        state.fiterData = state.data.filter(
          person => person.eye_color === eyeColor,
        );
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPersons.pending, state => {
        state.loadData = true;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.next = action.payload.next;
        state.loadData = false;
        if (action.meta.arg == 1) {
          state.data = action.payload.results;
        } else {
          state.data = state.data.concat(action.payload.results);
        }
      })
      .addCase(getPersons.rejected, (state, action) => {
        state.loadData = true;
        state.error = action.payload ?? 'Неизвестная ошибка';
      });
  },
});
export const {filterPersons} = presonSlice.actions;

export default presonSlice.reducer;
