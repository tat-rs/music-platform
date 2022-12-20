import TrackList from "../components/TrackList"

const tracks = [
  {
    _id: 1,
    name: "Письмо Санте",
    artist: "Люся Чеботина",
    text: "лалаллалала",
    listens: 0,
    picture: 'https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    audio: '',
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
    picture: 'https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    audio: '',
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
    picture: 'https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    audio: '',
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
    picture: 'https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    audio: '',
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