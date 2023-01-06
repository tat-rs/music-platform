import React from "react";
import TrackItem from "./TrackItem";
import { ITrackItem } from "../types/types";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {

  return (
    <ul>
      {
        tracks && tracks.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))
      }
    </ul>
  )
}