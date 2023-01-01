import { useEffect } from "react";
import TrackList from "../components/TrackList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import fetchTracks from "../store/tracks/thunk";

export default function Tracks() {
  const dispatch = useAppDispatch();
  const {tracks, isLoading, isError} = useAppSelector((state) => state.tracks)

  useEffect(() => {
    dispatch(fetchTracks())
  }, []);

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
    <TrackList tracks={tracks}/>
  )
}