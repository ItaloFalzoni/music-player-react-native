import React, { useRef } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet"

import plusSquareIcon from '../../../assets/images/icons/plus-square.png'
import PlayingNow from '../PlayingNow'

import styles from './styles'

export default function Music() {
  const refRBSheet = useRef()

  const heightSheet = Dimensions.get('window').height - 120
  return (
    <>
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
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