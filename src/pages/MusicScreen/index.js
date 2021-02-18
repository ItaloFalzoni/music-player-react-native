import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Music from '../../components/Music'

import styles from './styles'

export default function MusicScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      {/* <Music onPress={() => navigation.navigate('PlayingNow')} /> */}
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
      <Music />
    </ScrollView>
  )
}
