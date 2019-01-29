import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, Button, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../Actions/AuthAction';

class FormCadastro extends Component {
  caal() {
    const { name, email, pass } = this.props;
    const { registerUser } = this.props;
    registerUser({ name, email, pass });
  }

  render() {
    const {
      name, email, pass, errorMessage,
    } = this.props;
    const { changeName, changeEmail, changePass } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            value={name}
            placeholder="Nome"
            style={styles.input}
            onChangeText={newName => changeName(newName)}
          />
          <TextInput
            value={email}
            placeholder="Email"
            style={styles.input}
            onChangeText={newEmaill => changeEmail(newEmaill)}
          />
          <TextInput
            value={pass}
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            onChangeText={newPass => changePass(newPass)}
          />
          <TextInput
            value={pass}
            placeholder="Confirme sua senha"
            secureTextEntry
            style={styles.input}
            onChangeText={newPass => changePass(newPass)}
          />
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            title="Cadastrar"
            color="#115E54"
            onPress={() => this.caal()}
          />
        </View>
      </View>
    );
  }
}

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
    errorMessage: state.auth.errorMessage,
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
  registerUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, {
  changeEmail: Actions.changeEmail,
  changeName: Actions.changeName,
  changePass: Actions.changePass,
  registerUser: Actions.registerUser,
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
  error: {
    color: '#F00',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
