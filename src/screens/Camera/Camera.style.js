import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 130,
    width
  },
  backButton: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  backIcon: {
    color: '#fff',
    fontSize: 35,
    padding: 16
  },
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    alignSelf: 'center'
  }
});