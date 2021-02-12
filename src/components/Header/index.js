import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

import chevronLeftIcon from '../../../assets/images/icons/chevron-left.png'
import chevronDownIcon from '../../../assets/images/icons/chevron-down.png'
import moreVerticalIcon from '../../../assets/images/icons/more-vertical.png'

import styles from './styles'

export default function Header({ ...props }) {
  return (
    <View style={styles.header}>
      {
        props.goIn
          ?
          <TouchableNativeFeedback onPress={props.goBack}>
            <Image style={styles.actionIcon} source={chevronLeftIcon} />
          </TouchableNativeFeedback>
          :
          ''
      }
      <TouchableNativeFeedback style={styles.centerText} onPress={props.goIn}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Image style={styles.actionIconSmall} source={chevronDownIcon} />
      </TouchableNativeFeedback>
      <Image style={styles.actionIcon} source={moreVerticalIcon} />
    </View>
  )
}