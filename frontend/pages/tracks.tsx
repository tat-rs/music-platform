import { GetServerSideProps } from "next";
import { Context } from "next-redux-wrapper";
import { useEffect } from "react";
import TrackList from "../components/TrackList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { NextThunkDispatch, wrapper } from "../store/store";
import { fetchTracks } from "../store/tracks/thunk";
import { ITrackItem } from "../types/types";

export default function Tracks() {
  const {tracks, isLoading, isError} = useAppSelector((state) => state.tracks)

  if(isLoading) {
    return (
      <p>Идет загрузка...</p>
    )
  }

  if(isError) {
    return (
      <p>Произошла ошибка при загрузке треков...</p>
    )
  }

  return (
    tracks?.length > 0 && <TrackList tracks={tracks}/>
  )
}

/* export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: Context) => {
  const dispatch = store.dispatch;
  const tracks = await dispatch(fetchTracks()).then((res) => res.payload);
  return {
    props: {
      tracks
    }
  }
}); */

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: Context) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(fetchTracks())
  return {
    props: {}
  }
})