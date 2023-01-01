import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ITrackItem } from '../../types/types';
import { BASE_URL_API } from '../../utils/constants';

const fetchTracks = createAsyncThunk(
  'tracks/fetchTracks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL_API}/tracks`);
      return data as ITrackItem[];
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

export default fetchTracks;
