import React, { useState } from 'react'
import { Text, Image, View, Pressable } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import Playlist from '../../components/Playlist'
import styles from './styles'

import plusCircleIcon from '../../../assets/images/icons/plus-circle.png'

export default function PlaylistScreen() {
  playlistArray = [
    {
      id: 1,
      title: 'Playlist'
    },
    {
      id: 2,
      title: 'Playlist'
    },
    {
      id: 3,
      title: 'Playlist'
    },
    {
      id: 4,
      title: 'Playlist'
    },
    {
      id: 5,
      title: 'Playlist'
    },
    {
      id: 6,
      title: 'Playlist'
    },
    {
      id: 7,
      title: 'Playlist'
    },
    {
      id: 8,
      title: 'Playlist'
    },
    {
      id: 9,
      title: 'Playlist'
    },
    {
      id: 10,
      title: 'Playlist'
    },
  ]

  const playlistRenderArray = playlistArray.map(playlist => (
    <View style={styles.playlistArray} key={playlist.id}>
      <View style={styles.playlistArrayCheckbox} />
      <Text style={styles.modalText}>Playlist {playlist.id}</Text>
    </View>
  ))

  const [isModalVisible, setModalVisible] = useState(false);
  
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Playlist />
        <Playlist />

        <TouchableOpacity
          style={styles.newPlaylist}
          onPress={toggleModal}>
          <Image style={styles.actionIcon} source={plusCircleIcon} />
          <Text style={styles.newPlaylistText}>New Playlist</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        // hideModalContentWhileAnimating={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Add to playlist</Text>
          </View>
          <ScrollView style={styles.playlistArrayContainer}>
            {playlistRenderArray}
          </ScrollView>

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.buttonModal, styles.buttonCancelModal]}
              onPress={toggleModal}
            >
              <Text style={styles.modalButtonText}>
                Cancel
              </Text>
            </Pressable>

            <Pressable
              style={[styles.buttonModal, styles.buttonDoneModal]}
              onPress={toggleModal}
            >
              <Text style={styles.modalButtonText}>
                Done
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}