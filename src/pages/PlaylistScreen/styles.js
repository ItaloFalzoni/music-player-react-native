import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 15
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
})
export default styles