import React from 'react'
import { View, Image, Text } from 'react-native'

import playCircleIcon from '../../../assets/images/icons/play-circle.png'

import styles from './styles'

export default function Playlist() {
  return (
    <View style={styles.content}>
      <View style={styles.playlistProfile}>
        <View style={styles.playlistIcon} />
        <View style={styles.nameGroup}>
          <Text style={styles.playlistName}>Playlist Name</Text>
          <Text style={styles.artistName}>8 musics</Text>
        </View>
      </View>

      <Text style={styles.playlistTime}>28:40</Text>

      <Image style={styles.actionIcon} source={playCircleIcon} />
    </View>
  )
}