import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITrackItem } from '../../types/types';
import { BASE_URL_API } from '../../utils/constants';

export const fetchTracks = createAsyncThunk<
  ITrackItem[]
>(
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

export const postTracks = createAsyncThunk<
  ITrackItem,
  FormData
>(
  'tracks/postTracks',
  async (trackInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL_API}/tracks`, trackInfo);
      return data as ITrackItem;
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

