import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 5
  },
  newPlaylist: {
    flex: 1,
    flexDirection: 'row',
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5'
  },
  newPlaylistText: {
    marginLeft: 15,
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24
  },
  actionButton: {
    width: 36,
    height: 36
  },
  modalContainer: {
    height: Dimensions.get('window').height / 5 * 3,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    marginHorizontal: 10,
  },
  modalHeaderText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#171516',
  },
  modalText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 21,
    color: '#171516',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonModal: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  buttonCancelModal: {
    backgroundColor: 'red',
    borderBottomLeftRadius: 5,
    marginRight: 1,
  },
  buttonDoneModal: {
    backgroundColor: 'green',
    borderBottomRightRadius: 5,
    marginLeft: 1
  },
  modalButtonText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 21,
    color: '#fff',
  },
  playlistArrayContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  playlistArrayCheckbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    marginRight: 30,
  },
  playlistArray: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
})
export default styles