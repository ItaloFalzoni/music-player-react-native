import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import moreVerticalIcon from '../../../assets/images/icons/more-vertical.png'
import chevronLeftIcon from '../../../assets/images/icons/chevron-left.png'
import playCircleIcon from '../../../assets/images/icons/play-circle.png'
import repeatIcon from '../../../assets/images/icons/repeat.png'
import shuffleIcon from '../../../assets/images/icons/shuffle.png'
import skipBackIcon from '../../../assets/images/icons/skip-back.png'
import skipForwardIcon from '../../../assets/images/icons/skip-forward.png'

import styles from './styles'

import { Audio } from 'expo-av'

export default function PlayingNow({ navigation }) {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/music.m4a')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('MusicList')}>
          <Image style={styles.actionIcon} source={chevronLeftIcon}></Image>
        </TouchableNativeFeedback>
        <Text style={styles.headerText}>PLAYING NOW</Text>
        <Image style={styles.actionIcon} source={moreVerticalIcon}></Image>
      </View>

      <View style={styles.musicDescription}>
        <View style={styles.musicLogo}></View>
        <Text style={styles.musicName}>Music Name</Text>
        <Text style={styles.artistName}>Artist Name</Text>
      </View>

      <View style={styles.musicControl}>
        <View style={styles.secondsRow}>
          <Text style={styles.secondsText}>1:40</Text>
          <Text style={styles.secondsText}>3:20</Text>
        </View>

        <View style={styles.progressStatus}>
          <View style={styles.progressInit}></View>
          <View style={styles.progressEnd}></View>
        </View>

        <View style={styles.buttonRow}>
          <Image style={styles.actionIcon} source={shuffleIcon}></Image>
          <Image style={styles.actionIcon} source={skipBackIcon}></Image>
          <TouchableNativeFeedback onPress={playSound}>
            <Image style={styles.actionIconDouble} source={playCircleIcon}></Image>
          </TouchableNativeFeedback>
          <Image style={styles.actionIcon} source={skipForwardIcon}></Image>
          <Image style={styles.actionIcon} source={repeatIcon}></Image>
        </View>
      </View>
    </View>
  )
}