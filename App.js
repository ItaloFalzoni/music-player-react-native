import React from 'react'
import TabNavigator from './src/route/MainNavigation'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return (
      <StatusBar />
    )
  } else {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    )
  }
}