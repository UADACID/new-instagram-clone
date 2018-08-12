import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

import styles from './Login.style';
import HeaderAddPhoto from '../../components/HeaderAddPhoto';

export default class Login extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (<HeaderAddPhoto />)
  })

  componentDidMount(){

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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textLogin}>Masuk</Text>
        </TouchableOpacity>
        <View style={styles.informationWraper}>
          <Text style={styles.informationText}>
            Lupa detail informasi masuk anda? <Text style={styles.informationBold}>Dapatkan bantuan untuk</Text>
          </Text>
          <Text style={styles.informationBold}>masuk</Text>
        </View>
        <View style={styles.sparatorWraper}>
          <View style={styles.sparatorLine} />
          <View style={styles.textSparatorWraper}>
            <Text style={styles.textSparator}>ATAU</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonLoginWithFb}>
          <Icon name="logo-facebook" style={styles.iconFb}/>
          <Text style={styles.textButtonFb}>Masuk dengan facebook</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Tidak punya akun? <Text style={styles.footerTextBold}>Buat Akun</Text>
          </Text>
        </View>
      </View>
    );
  }
}