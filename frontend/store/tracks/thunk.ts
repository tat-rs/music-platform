import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IComment, ISearch, ITrackItem } from '../../types/types';
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

export const deleteTracks = createAsyncThunk<
  ITrackItem,
  number
>(
  'tracks/deleteTracks',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL_API}/tracks/${id}`);
      return data as ITrackItem;
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

export const addListenTrack = createAsyncThunk(
  'tracks/addListenTrack',
  async (id:number, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL_API}/tracks/listen/${id}`);
      return data as ITrackItem;
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

export const searchTracks = createAsyncThunk<
  ITrackItem[],
  ISearch  
>(
  'tracks/searchTracks',
  async (searchData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL_API}/tracks/search?category=${searchData.category}&query=${searchData.query}`);
      return data as ITrackItem[];
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);