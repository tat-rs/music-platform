import React from "react";
import TrackItem from "./TrackItem";
import { ITrackItem } from "../types/types";
import { useAppSelector } from "../hooks/hooks";
import Loader from "./Loader";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {

  const {isLoading} = useAppSelector((state) => state.tracks);

  if(isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <ul>
      {
        tracks?.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))
      }
    </ul>
  )
}