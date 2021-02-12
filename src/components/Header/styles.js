import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  centerText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24
  },
  actionIcon: {
    height: 24,
    width: 24,
  },
  actionIconSmall: {
    width: 12,
    height: 12,
  },
})
export default styles