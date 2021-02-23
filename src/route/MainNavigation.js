import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Browser from '../components/Browser'

import List from '../pages/MusicScreen'
import ArtistScreen from '../pages/ArtistScreen'
import PlaylistScreen from '../pages/PlaylistScreen'

import PlayingNow from '../components/PlayingNow'
import MusicScreen from '../pages/MusicScreen'

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()

const tabTopOptions = {
  labelStyle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    margin: 0
  },
  activeTintColor: '#171516',
  inactiveTintColor: '#4C4C4C',
  indicatorStyle: {
    backgroundColor: '#FF4000',
  },
  style: {
    backgroundColor: '#FEEFDD',
  },
  shifting: true,
}

// function MusicStack() {
//   return (
//     <Stack.Navigator headerMode="none">
//       <Stack.Screen name="MusicList" component={List} />
//       <Stack.Screen name="PlayingNow" component={PlayingNow} />
//     </Stack.Navigator>
//   )
// }

export default function TabNavigator() {
  return (
    <>
      <Browser />
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={tabTopOptions}>
        <Tab.Screen name="Musics" component={MusicScreen} />
        <Tab.Screen name="Artists" component={ArtistScreen} />
        <Tab.Screen name="Playlists" component={PlaylistScreen} />
      </Tab.Navigator>
    </>
  )
}