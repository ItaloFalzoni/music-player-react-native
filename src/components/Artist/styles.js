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
  artistProfile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  artistIcon: {
    height: 48,
    width: 48,
    backgroundColor: '#C4C4C4',
  },
  artistName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#171516',
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    color: '#4D4D4D',
  },
  nameGroup: {
    marginLeft: 15
  },
  actionIcon: {
    width: 36,
    height: 36,
  }
})
export default styles