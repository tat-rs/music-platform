import { Context } from "next-redux-wrapper";
import TrackList from "../components/TrackList";
import { useAppSelector } from "../hooks/hooks";
import { wrapper } from "../store/store";
import { fetchTracks } from "../store/tracks/thunk";

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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context: Context) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchTracks());
  return {
    props: {}
  }
});