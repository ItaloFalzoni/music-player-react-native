import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  musicProfile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  musicIcon: {
    height: 48,
    width: 48,
    backgroundColor: '#C4C4C4',
  },
  musicName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#171516',
  },
  artistName: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    color: '#4D4D4D',
  },
  nameGroup: {
    marginLeft: 15
  },
  musicTime: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 21,
  },
  actionIcon: {
    width: 24,
    height: 24,
  }
})
export default styles