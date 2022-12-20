export interface IComment {
  trackId: number;
  username: string;
  text: string;
}

export interface ITrackItem {
  _id: number;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments?: IComment[];
}