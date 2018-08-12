import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height - 25
  },
  language: {
    color: '#999',
    fontSize: 14,
    marginTop: 16
  },
  title: {
    fontSize: 50,
    fontFamily: 'Billabong',
    color: '#000',
    marginTop: height / 9.5
  },
  textInput: {
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    width: width - 34,
    height: 48,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#dedede',
    marginTop: 15
  },
  button: {
    marginTop: 15,
    // marginLeft: 16,
    width: width - 32,
    height: 48,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#bfdef5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogin: {
    color: '#bfdef5'
  },
  informationWraper: {
    padding: 16,
    alignItems: 'center'
    // marginHorizontal: 16
  },
  informationText: {
    fontSize: 12,
    color: '#999'
  },
  informationBold: {
    color: '#000',
    fontWeight: 'bold'
  },
  sparatorWraper: {
    width: width - 34,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sparatorLine: {
    borderWidth: 1,
    width: width - 34,
    borderColor: '#dedede'
  },
  textSparatorWraper: {
    position: 'absolute',
    height: 20,
    width: width - 34,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSparator: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    color: '#8d8d8d'
  },
  buttonLoginWithFb: {
    // marginLeft: 16,
    flexDirection: 'row',
    marginTop: 15,
    width: width - 32,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e99ee'
  },
  textButtonFb: {
    color: '#fff',
    fontWeight: 'bold'
  },
  iconFb: {
    color: '#fff',
    marginRight: 8
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: '#dedede',
    width: width,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 12
  },
  footerTextBold: {
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderWidth: 1
  }
});