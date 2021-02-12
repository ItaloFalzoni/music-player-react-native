import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEEFDD',
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
  musicStats: {
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  musicControl: {
    padding: 30,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  secondText: {
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
    alignItems: 'center'
  },
  pushButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4000',
    padding: 15,
  },
  pushButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    lineHeight: 27,
    color: '#FFF'
  },
})
export default styles