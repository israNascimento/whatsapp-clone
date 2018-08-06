import React from 'react';
import {
  StyleSheet, View, TextInput, Button,
} from 'react-native';

export default () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} />
      <TextInput placeholder="Confirme sua senha" style={styles.input} />
    </View>
    <View style={styles.bottom}>
      <Button title="Cadastrar" color="#115E54" onPress={() => null} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  signup: {
    marginTop: 10,
    fontSize: 15,
  },
  signupbutton: {
    fontWeight: 'bold',
  },
});
