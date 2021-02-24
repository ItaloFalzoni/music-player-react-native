import React, { useRef } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet"

import playCircleIcon from '../../../assets/images/icons/play-circle.png'
import PlayingNow from '../PlayingNow'


import styles from './styles'

export default function Artist({ ...props }) {
  const refRBSheet = useRef()

  const heightSheet = Dimensions.get('window').height - 120
  return (
    <>
    <TouchableNativeFeedback
      style={styles.content}>
      <View style={styles.artistProfile}>
        <View style={styles.artistIcon} />
        <View style={styles.nameGroup}>
          <Text style={styles.artistName}>Artist Name</Text>
          <Text style={styles.description}>8 musics</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <Image style={styles.actionIcon} source={playCircleIcon} />
      </TouchableOpacity>
    </TouchableNativeFeedback>

    <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={heightSheet}
        animationType={'slide'}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          draggableIcon: {
            backgroundColor: '#FF4000',
            marginBottom: 0,
          }
        }}>
        <PlayingNow />
      </RBSheet>
    </>

    
  )
}