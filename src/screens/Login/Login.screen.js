import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon, Button } from 'native-base';

import styles from './Login.style';
import HeaderAddPhoto from '../../components/HeaderAddPhoto';

export default class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderAddPhoto />)
  })

  componentDidMount(){

  }

  onPressRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register')
  }

  onPressLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('AuthNavigation')
  }

  onPressLoginFb = () => {
    Alert.alert('under development')
  }

  onPressInfo = () => {
    Alert.alert('under development')
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.language}>
          Indonesia (Indonesia)
        </Text>
        <Text style={styles.title}>
          Outstagram
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nomor telepon, email, atau nama pengguna"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Kata sandi"
          placeholderTextColor="#999"
        />
        <Button
          transparent
          style={styles.button}
          onPress={this.onPressLogin}
        >
          <Text style={styles.textLogin}>Masuk</Text>
        </Button>
        <View style={styles.informationWraper}>
          <Text style={styles.informationText}>
            Lupa detail informasi masuk anda? <Text onPress={this.onPressInfo} style={styles.informationBold}>Dapatkan bantuan untuk</Text>
          </Text>
          <Text style={styles.informationBold}>masuk</Text>
        </View>
        <View style={styles.sparatorWraper}>
          <View style={styles.sparatorLine} />
          <View style={styles.textSparatorWraper}>
            <Text style={styles.textSparator}>ATAU</Text>
          </View>
        </View>
        <Button
          style={styles.buttonLoginWithFb}
          onPress={this.onPressLoginFb}
        >
          <Icon name="logo-facebook" style={styles.iconFb}/>
          <Text style={styles.textButtonFb}>Masuk dengan facebook</Text>
        </Button>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Tidak punya akun? <Text onPress={this.onPressRegister} style={styles.footerTextBold}>Buat Akun</Text>
          </Text>
        </View>
      </View>
    );
  }
}