export const music = [
 {
    url: require('../Music/Come-back.mp3'), // Load media from the network
    title: 'Come back Home',
    artist: 'Sofia Carson',
    artwork: require('../Images/i.webp'),
    duration: '3:19'
},
{
    url: require('../Music/right-now.mp3'), // Load media from the app bundle
    title: 'Right now',
    artist: 'Acon',
    artwork: require('../Images/i3.webp'), // Load artwork from the app bundle
    duration: '4:00'
},
{
    url: require('../Music/night-changes.mp3'), // Load media from the file system
    title: 'night changes',
    artist: 'One Direction',
    artwork: require('../Images/i5.webp'),
    duration: '4:00'

},
{
    url: require('../Music/Hamdard.mp3'), // Load media from the file system
    title: 'Humdard',
    artist: 'Arijit singh',
    artwork: require('../Images/i4.webp'),
    duration: '4:20'
}
]


// You can then [add](https://react-native-track-player.js.org/docs/api/functions/queue#addtracks-insertbeforeindex) the items to the queue
