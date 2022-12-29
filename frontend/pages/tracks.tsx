import TrackList from "../components/TrackList";

const tracks = [
  {
    _id: 1,
    name: "Письмо Санте",
    artist: "Люся Чеботина",
    text: "лалаллалала",
    listens: 0,
    picture: 'http://localhost:5000/picture/b068b713-4af6-4928-af7d-2f4942a0d465.jpg',
    audio: 'http://localhost:5000/audio/e3ddad3a-fd12-417c-a6e0-aaa03fca48aa.mp3',
    comments: [
      {trackId: 1,
      username: 'Вася',
      text: "норм",}
    ]
  },
  {
    _id: 2,
    name: "Письмо Санте 2",
    artist: "Люся Чеботина",
    text: "лалаллалала",
    listens: 0,
    picture: 'http://localhost:5000/picture/b068b713-4af6-4928-af7d-2f4942a0d465.jpg',
    audio: 'http://localhost:5000/audio/e3ddad3a-fd12-417c-a6e0-aaa03fca48aa.mp3',
    comments: [
      {trackId: 2,
      username: 'Вася',
      text: "норм",}
    ]
  }, 
  {
    _id: 3,
    name: "Письмо Санте 3",
    artist: "Люся Чеботина",
    text: "лалаллалала",
    listens: 0,
    picture: 'http://localhost:5000/picture/b068b713-4af6-4928-af7d-2f4942a0d465.jpg',
    audio: 'http://localhost:5000/audio/e3ddad3a-fd12-417c-a6e0-aaa03fca48aa.mp3',
    comments: [
      {trackId: 3,
      username: 'Вася',
      text: "норм",}
    ]
  },
  {
    _id: 4,
    name: "Письмо Санте 4",
    artist: "Люся Чеботина",
    text: "лалаллалала",
    listens: 0,
    picture: 'http://localhost:5000/picture/b068b713-4af6-4928-af7d-2f4942a0d465.jpg',
    audio: 'http://localhost:5000/audio/e3ddad3a-fd12-417c-a6e0-aaa03fca48aa.mp3',
    comments: [
      {trackId: 4,
      username: 'Вася',
      text: "норм",}
    ]
  }
]

export default function Tracks() {

  return (
    <TrackList tracks={tracks}/>
  )
}