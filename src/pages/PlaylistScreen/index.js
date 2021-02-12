import React from 'react'
import { Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Playlist from '../../components/Playlist'
import styles from './styles'

import plusCircleIcon from '../../../assets/images/icons/plus-circle.png'

export default function PlaylistScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <Playlist />
      <Playlist />

      <View style={styles.newPlaylist}>
        <Image style={styles.actionIcon} source={plusCircleIcon} />
        <Text style={styles.newPlaylistText}>New Playlist</Text>
      </View>
    </ScrollView>
  )
}