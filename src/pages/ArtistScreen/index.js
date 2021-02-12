import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Artist from '../../components/Artist'
import styles from './styles'

export default function ArtistScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <Artist
        onPress={() => navigation.navigate('MusicList')}
        onPlay={() => navigation.navigate('PlayingNow')} />
    </ScrollView>
  )
}