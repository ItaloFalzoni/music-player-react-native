import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#FEEFDD'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionIcon: {
    height: 24,
    width: 24,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 36,
    lineHeight: 54,
    marginTop: 60,
  }
})
export default styles