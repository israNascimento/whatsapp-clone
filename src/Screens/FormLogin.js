import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import defaultStyle from './styles';
import { changeEmail, changePass, loginAction } from '../Actions/AuthAction';

class FormLogin extends Component {
  login() {
    const { email, pass, authLogin } = this.props;
    authLogin({ email, pass });
  }

  isLoading() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <ActivityIndicator />
      );
    }
    return (
      <Button title="Entrar" color="#115E54" onPress={() => this.login()} />
    );
  }

  render() {
    const {
      email, pass, navigation, errorMessage,
    } = this.props;
    const { authChangeEmail, authChangePass } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textTop}>
            Whatsapp clone
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            onChangeText={text => authChangeEmail(text)}
            value={email}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            onChangeText={text => authChangePass(text)}
            secureTextEntry
            value={pass}
            style={styles.input}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={defaultStyle.errorMessage}>{errorMessage}</Text>
          { this.isLoading() }
          <View style={styles.textWrapper}>
            <Text style={styles.signup}>
              Ainda não está cadastrado?
            </Text>
            <TouchableNativeFeedback
              onPress={() => { navigation.navigate('Signup'); }}
            >
              <Text style={[styles.signup, styles.signupbutton]}>
                {' '}
                Clique aqui
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

FormLogin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  authChangeEmail: PropTypes.func.isRequired,
  authChangePass: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    email: state.auth.email,
    pass: state.auth.pass,
    errorMessage: state.auth.errorMessageSignin,
    isLoading: state.auth.isLoadingSignin,
  }
);
export default connect(mapStateToProps, {
  authChangeEmail: changeEmail,
  authChangePass: changePass,
  authLogin: loginAction,
})(FormLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  top: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textTop: {
    fontSize: 30,
    color: 'grey',
  },

  form: {
    flex: 2,
    justifyContent: 'center',
  },
  input: {
    height: 45,
    fontSize: 20,
  },

  bottom: {
    flex: 2,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  signup: {
    marginTop: 10,
    fontSize: 15,
  },
  signupbutton: {
    fontWeight: 'bold',
  },
});
