import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Browser from '../components/Browser'

import MusicScreen from '../pages/MusicScreen'
import ArtistScreen from '../pages/ArtistScreen'
import PlaylistScreen from '../pages/PlaylistScreen'

import MusicList from '../pages/MusicList'

import PlayingNow from '../components/PlayingNow'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const tabBottomOptions = {
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

function MusicStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MusicList" component={MusicList} />
      <Stack.Screen name="PlayingNow" component={PlayingNow} />
    </Stack.Navigator>
  )
}

function ArtistStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="ArtistScreen" component={ArtistScreen} />
      {/* <Stack.Screen name="MusicList" component={MusicList} /> */}
      {/* <Stack.Screen name="PlayingNow" component={PlayingNow} /> */}
    </Stack.Navigator>
  )
}

export default function TabNavigator() {
  return (
    <>
      <Browser />
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFF"
        inactiveColor="#4C4C4C"
        barStyle={{ backgroundColor: '#FF4000' }}
        options={tabBottomOptions}>
        <Tab.Screen name="Musics" component={MusicStack} />
        <Tab.Screen name="Artists" component={ArtistStack} />
        <Tab.Screen name="Playlists" component={PlaylistScreen} />
      </Tab.Navigator>
    </>
  )
}