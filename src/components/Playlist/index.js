import React, { useRef } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RBSheet from 'react-native-raw-bottom-sheet'

import playCircleIcon from '../../../assets/images/icons/play-circle.png'

import PlayingNow from '../PlayingNow'

import styles from './styles'

export default function Playlist() {
  const refRBSheet = useRef()

  const heightSheet = Dimensions.get('window').height
  return (
    <>
      <View style={styles.content}>
        <View style={styles.playlistProfile}>
          <View style={styles.playlistIcon} />
          <View style={styles.nameGroup}>
            <Text style={styles.playlistName}>Playlist Name</Text>
            <Text style={styles.artistName}>8 musics</Text>
          </View>
        </View>

        <Text style={styles.playlistTime}>28:40</Text>

        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Image style={styles.actionIcon} source={playCircleIcon} />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={heightSheet}
        animationType={'slide'}
        closeOnDragDown={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <PlayingNow />
      </RBSheet>
    </>    
  )
}