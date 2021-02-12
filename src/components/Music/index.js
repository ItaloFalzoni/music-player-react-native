import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import plusSquareIcon from '../../../assets/images/icons/plus-square.png'
import styles from './styles'

export default function Music({ ...props }) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.content}>
      <View style={styles.musicProfile}>
        <View style={styles.musicIcon} />
        <View style={styles.nameGroup}>
          <Text style={styles.musicName}>Music Name</Text>
          <Text style={styles.artistName}>Artist Name</Text>
        </View>
      </View>

      <Text style={styles.musicTime}>3:20</Text>

      <Image style={styles.actionIcon} source={plusSquareIcon} />
    </TouchableOpacity>
  )
}