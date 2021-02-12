import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Music from '../../components/Music'
import Header from '../../components/Header'

import styles from './styles'

export default function MusicList({ navigation }) {
  return (
    <>
      <Header
        title={'ALL MUSICS'}
        goBack={() => navigation.goBack}
        goIn={() => navigation.navigate('PlayingNow')} />

      <ScrollView style={styles.scrollView}>
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
        <Music onPress={() => navigation.navigate('PlayingNow')} />
      </ScrollView>
    </>
  )
}
