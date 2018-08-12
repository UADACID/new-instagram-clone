import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height - 25
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: height / 8.5
  },
  closeIcon: {
    color: '#999',
    marginRight: 5
  },
  multipleTitleWraper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dedede'
  },
  phonePrefix: {
    fontWeight: 'bold'
  },
  sparatorPhone: {
    height: 30,
    width: 1,
    backgroundColor: '#999',
    marginHorizontal: 17
  },
  titleItem: {
    width: (width - 34) / 2,
    height: 48,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    color: '#999',
    fontWeight: 'bold'
  },
  textInputWraper: {
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    width: width - 34,
    height: 48,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#dedede',
    marginTop: 15
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
  button: {
    marginLeft: 16,
    flexDirection: 'row',
    marginTop: 5,
    width: width - 32,
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e99ee'
  },
  textButton: {
    color: '#fff'
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