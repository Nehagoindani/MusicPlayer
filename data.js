const musiclibrary = [
  {
    id: 1,
    url: require('./Music/right-now.mp3'),
    title: 'Right Now ',
    artist: 'Acon',
    album: "Acon",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i3.webp'), // Load artwork from the network
    duration: 105, // Duration in seconds
  },
  {
    id: 2,
    url: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
    title: 'All I Want',
    artist: 'Kodaline',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i2.webp'),
    duration: 126, // Duration in seconds
  },
  {
    id: 3,
    url: require('./Music/Come-back.mp3'),
    title: 'Come Back Home',
    artist: 'Sofia Carson',
    album: "Bensound's rock",
    genre: 'Rock',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i.webp'),
    duration: 122, // Duration in seconds
  },
  {
    id: 4,
    url: require('./Music/hmdard.mp3'),
    title: 'Humdard',
    artist: 'Arijit Singh',
    album: "Bensound's Jazz",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i4.webp'),
    duration: 236, // Duration in seconds
  },
  {
    id: 5,
    url: require('./Music/night-changes.mp3'),
    title: 'Night Changes',
    artist: 'One Direction',
    album: "One Direction",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i5.webp'),
    duration: 146, // Duration in seconds
  },
  {
    id: 6,
    url: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    title: 'Love',
    artist: 'Benjamin Tissot',
    album: "Bensound's Jazz",
    genre: 'Jazz',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: require('./Images/i.webp'),
    duration: 335, // Duration in seconds
  },
  {
    id: 7,
    url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    title: 'Dreams',
    artist: 'Benjamin Tissot',
    album: "Bensound's Electronica",
    genre: 'Electronica',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/dreams.jpg',
    duration: 310, // Duration in seconds
  },
  {
    id: 8,
    url: 'https://www.bensound.com/bensound-music/bensound-dance.mp3',
    title: 'Love',
    artist: 'Benjamin Tissot',
    album: "Bensound's Electronica",
    genre: 'Electronica',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://www.bensound.com/bensound-img/dance.jpg',
    duration: 177, // Duration in seconds
  },
];

export default musiclibrary