import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

const FormLogin = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>
          Whatsapp clone
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
      </View>
      <View style={styles.bottom}>
        <Button title="Entrar" color="#115E54" onPress={() => null} />
        <View style={styles.textWrapper}>
          <Text style={styles.signup}>
            Ainda não está cadastrado?
          </Text>
          <TouchableNativeFeedback
            onPress={() => { navigation.navigate('Cadastro'); }}
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
};

FormLogin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FormLogin;

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
