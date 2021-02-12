import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import playCircleIcon from '../../../assets/images/icons/play-circle.png'

import styles from './styles'

export default function Artist({ ...props }) {
  return (
    <TouchableNativeFeedback onPress={props.onPress} style={styles.content}>
      <View style={styles.artistProfile}>
        <View style={styles.artistIcon} />
        <View style={styles.nameGroup}>
          <Text style={styles.artistName}>Artist Name</Text>
          <Text style={styles.description}>8 musics</Text>
        </View>
      </View>
      <TouchableNativeFeedback onPress={props.onPlay}>
        <Image style={styles.actionIcon} source={playCircleIcon} />
      </TouchableNativeFeedback>
    </TouchableNativeFeedback>
  )
}