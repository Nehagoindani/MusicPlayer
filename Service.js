import TrackPlayer, { Event, State } from 'react-native-track-player';
let wasPausedByDuck = false;

module.exports = async function(){
    TrackPlayer.addEventListener('remote-play', () => {
        TrackPlayer.play()
      })
    
      TrackPlayer.addEventListener('remote-pause', () => {
        TrackPlayer.pause()
      });
    
      TrackPlayer.addEventListener('remote-next', () => {
        TrackPlayer.skipToNext()
      });
    
      TrackPlayer.addEventListener('remote-previous', () => {
        TrackPlayer.skipToPrevious()
      });
    
      TrackPlayer.addEventListener('remote-stop', () => {
        TrackPlayer.destroy()
      });
      TrackPlayer.addEventListener('remote-seek', async ({position}) => {
        await TrackPlayer.seekTo(position)
      });
    // TrackPlayer.addEventListener('remote-play', ()=> TrackPlayer.play())
    // TrackPlayer.addEventListener('remote-pause', ()=>TrackPlayer.pause())
    // TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
    
    
}