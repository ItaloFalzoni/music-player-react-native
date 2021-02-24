import React from 'react'
import { Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import Playlist from '../../components/Playlist'
import styles from './styles'

import plusCircleIcon from '../../../assets/images/icons/plus-circle.png'

export default function PlaylistScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <Playlist />
      <Playlist />

      <TouchableOpacity
        style={styles.newPlaylist}
        onPress={() => {}}>
        <Image style={styles.actionIcon} source={plusCircleIcon} />
        <Text style={styles.newPlaylistText}>New Playlist</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}