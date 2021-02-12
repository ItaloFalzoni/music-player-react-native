import React from 'react'
import { View, Text, Image } from 'react-native'

import searchIcon from '../../../assets/images/icons/search.png'
import moreVerticalIcon from '../../../assets/images/icons/more-vertical.png'

import styles from './styles'

export default function Browser() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Image style={styles.actionIcon} source={searchIcon}></Image>
        <Image style={styles.actionIcon} source={moreVerticalIcon}></Image>
      </View>
      <Text style={styles.text}>Browse</Text>
    </View>
  )
}