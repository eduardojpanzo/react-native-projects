import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {playListdata} from '../constants';
import {SongInfo} from '../components/SongInfo';
import {SongSlider} from '../components/SongSlider';
import {ControlCenter} from '../components/ControlCenter';

const {width} = Dimensions.get('window');

export function MusicPlayer() {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(playingTrack);
        break;
    }
  });

  const renderArtwork = () => {
    return (
      <View style={styles.listArtWapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.constainer}>
      <FlatList
        horizontal
        data={playListdata}
        renderItem={renderArtwork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#001919',
  },
  albumArtImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
