import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFF'
  },
  actionIconSmall: {
    width: 12,
    height: 12,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  actionIconDouble: {
    height: 48,
    width: 48,
  },
  headerText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#171516',
  },
  musicDescription: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEEFDD',
    flex: 1,
  },
  musicLogo: {
    backgroundColor: '#C4C4C4',
    marginTop: 30,
    width: 180,
    height: 180,
    borderRadius: 10
  },
  musicName: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    lineHeight: 27,
    marginTop: 30,
    color: '#171516',
  },
  artistName: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#4D4D4D',
  },
  musicControl: {
    paddingHorizontal: 30,
    paddingVertical: 60,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  secondsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  secondsText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#4D4D4D',
  },
  progressStatus: {
    marginTop: 5,
    flexDirection: 'row',
    height: 3,
  },
  progressInit: {
    flex: 0.5,
    backgroundColor: '#FF4000',
  },
  progressEnd: {
    flex: 0.5,
    backgroundColor: '#C4C4C4',
  },
  buttonRow: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
export default styles