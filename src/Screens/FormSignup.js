import React from 'react';
import {
  StyleSheet, View, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../Actions/AuthAction';

const FormCadastro = (props) => {
  const { name, email, pass } = props;
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={name}
          placeholder="Nome"
          style={styles.input}
          onChangeText={newName => props.changeName(newName)}
        />
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.input}
          onChangeText={newEmaill => props.changeEmail(newEmaill)}
        />
        <TextInput
          value={pass}
          placeholder="Senha"
          style={styles.input}
          onChangeText={newPass => props.changePass(newPass)}
        />
        <TextInput placeholder="Confirme sua senha" style={styles.input} />
      </View>
      <View style={styles.bottom}>
        <Button title="Cadastrar" color="#115E54" onPress={() => null} />
      </View>
    </View>
  );
};

FormCadastro.navigationOptions = {
  title: 'Cadastro',
  headerStyle: {
    backgroundColor: '#115E54',
  },
  headerTintColor: '#fff',
};

const mapStateToProps = state => (
  {
    name: state.auth.name,
    email: state.auth.email,
    pass: state.auth.pass,
  }
);

FormCadastro.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePass: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  changeEmail: Actions.changeEmail,
  changeName: Actions.changeName,
  changePass: Actions.changePass,
})(FormCadastro);

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
