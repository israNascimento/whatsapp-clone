import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, Button, Text, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import defaultStyle, { PRIMARY_COLOR } from './styles';
import * as Actions from '../Actions/AuthAction';

class FormCadastro extends Component {
  cadastro() {
    const { name, email, pass } = this.props;
    const { registerUser } = this.props;
    registerUser({ name, email, pass });
  }

  hasLoading() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <ActivityIndicator />
      );
    }
    return (
      <Button
        title="Cadastrar"
        color={PRIMARY_COLOR}
        onPress={() => this.cadastro()}
      />
    );
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
            style={defaultStyle.input}
            onChangeText={newName => changeName(newName)}
          />
          <TextInput
            value={email}
            placeholder="Email"
            style={defaultStyle.input}
            onChangeText={newEmaill => changeEmail(newEmaill)}
          />
          <TextInput
            value={pass}
            placeholder="Senha"
            secureTextEntry
            style={defaultStyle.input}
            onChangeText={newPass => changePass(newPass)}
          />
          <TextInput
            value={pass}
            placeholder="Confirme sua senha"
            secureTextEntry
            style={defaultStyle.input}
            onChangeText={newPass => changePass(newPass)}
          />
          <Text style={defaultStyle.errorMessage}>{errorMessage}</Text>
        </View>
        <View style={styles.bottom}>
          {this.hasLoading()}
        </View>
      </View>
    );
  }
}

FormCadastro.navigationOptions = {
  title: 'Cadastro',
};

const mapStateToProps = state => (
  {
    name: state.auth.name,
    email: state.auth.email,
    pass: state.auth.pass,
    errorMessage: state.auth.errorMessageSignup,
    isLoading: state.auth.isLoadingSignup,
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
  isLoading: PropTypes.bool.isRequired,
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
