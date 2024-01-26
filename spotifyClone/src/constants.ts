import {Track} from 'react-native-track-player';

export const playListdata: Track[] = [
  {
    id: 1,
    title: 'The Blessing',
    artist: 'Kari Jobe, Elevation Worship, Cody Carnes',
    album: 'Graves into Gardens',
    artwork:
      'https://m.media-amazon.com/images/I/51nPzADnwcL._UF1000,1000_QL80_.jpg',
    url: require('./assets/audio/one.mp3'),
  },
  {
    id: 2,
    title: 'Saviour King',
    artist: 'HillSong',
    album: 'Saviour King',
    artwork: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Cd_sk_lrg.jpg',
    url: require('./assets/audio/two.mp3'),
  },
  {
    id: 3,
    title: "Oh Lord, You're Beautiful",
    artist: ' Keith Green, Martin Smith, Jason Upton',
    album: 'Your Love Broke Through',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjykLLYZEinVY5GMGr4WQYh9_vyLvMidtSFS_nzvKAspaO1IxNAFqRoWirXAc0-7sGNUU&usqp=CAU',
    url: require('./assets/audio/three.mp3'),
  },
  {
    id: 4,
    title: 'Our Father who art in heaven',
    artist: 'Don Moen',
    album: ' I Will Sing',
    artwork: 'https://img.youtube.com/vi/ajMqhFz3FIk/sddefault.jpg',
    url: require('./assets/audio/four.mp3'),
  },
];
