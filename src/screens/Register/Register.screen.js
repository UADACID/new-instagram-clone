import React, { Component } from 'react';
import {
  View ,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Button, Item, Input, Icon, Content } from 'native-base';

import styles from './Register.style';
import registerLogo from '../../assets/images/regLogo.png';

export default class Register extends Component {

  state = {
    formPhoneSelected: true
  }

  componentDidMount(){

  }

  onPressTitle = (obj) => () => {
    this.setState(obj)
  }

  onPressLogin = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onPressNext = () => {
    const { navigation } = this.props;
    navigation.navigate('AuthNavigation')
  }

  getActiveBorderColor = (params) => {
    if (params) {
      return {
        borderBottomColor: '#000'
      }
    } else {
      return {
        borderBottomColor: '#dedede'
      }
    }
  }

  getActiveTitleColor = (params) => {
    if (params) {
      return {
        color: '#000'
      }
    } else {
      return {
        color: '#999'
      }
    }
  }

  renderFormPhone = () => {

    return (
      <View style={styles.textInputWraper}>
        <Item>
          <Text style={styles.phonePrefix}>ID +62</Text>
          <View style={styles.sparatorPhone}/>
          <Input
            placeholder='nomer telepon'/>
          <Icon name='md-close' style={styles.closeIcon} />
        </Item>
      </View>
    );
  }

  renderFormEmail = () => {

    return (
      <View style={styles.textInputWraper}>
        <Item>
          <Input
            placeholder='email anda'/>
          <Icon name='md-close' style={styles.closeIcon} />
        </Item>
      </View>
    );
  }

  renderMultipleTitle = () => {
    const { formPhoneSelected } = this.state;

    return (
      <View style={styles.multipleTitleWraper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onPressTitle({ formPhoneSelected: true })}
          style={[styles.titleItem, this.getActiveBorderColor(formPhoneSelected)]}
        >
          <Text style={[styles.textTitle, this.getActiveTitleColor(formPhoneSelected)]}>
            TELEPON
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onPressTitle({ formPhoneSelected: false })}
          style={[styles.titleItem, this.getActiveBorderColor(!formPhoneSelected)]}
        >
        <Text style={[styles.textTitle, this.getActiveTitleColor(!formPhoneSelected)]}>
            EMAIL
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    const { formPhoneSelected } = this.state;
    return (
      <View style={styles.container}>
        <Content contentContainerStyle={styles.scrollContainer}>
          <Image source={registerLogo} style={styles.logo} />
          {/* <TextInput
            style={styles.textInput}
            placeholder="Kata sandi"
            placeholderTextColor="#999"
          /> */}
          {this.renderMultipleTitle()}
          {formPhoneSelected ? this.renderFormPhone() : this.renderFormEmail()}
          <View style={styles.informationWraper}>
            <Text style={styles.informationText}>
              Anda mungkin menerima pemberitahuan SMS dari Instagram dan
            </Text>
            <Text style={styles.informationText}>dapat memilih berhenti menerimanya kapan saja</Text>
          </View>
          <Button
            style={styles.button}
            onPress={this.onPressNext}
          >
            <Text style={styles.textButton}>Selanjutnya</Text>
          </Button>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Sudah punya akun? <Text onPress={this.onPressLogin} style={styles.footerTextBold}>Masuk.</Text>
            </Text>
          </View>
        </Content>
      </View>
    );
  }
}