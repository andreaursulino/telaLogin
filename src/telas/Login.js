import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Logo from '../componentes/Logo';
import { useNavigation } from '@react-navigation/native'; 
import Cadastro from './Cadastro';

   

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();  
  const navegarAcessar = () => {
    navigation.navigate("Acessar")
  }
  const handleLogin = () => {
    
    if (email !== '' && senha !== '') {
      
      alert('Autenticação feito, agora assista e aproveite.');
      
     navegarAcessar()
      

    } else {
      alert('Informações inválidas');
    }
  };

  const navigationToAcessar = () => {
    navigation.navigate('Acessar');  
  };

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro'); 
  };



  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.texto}>Diga seus dados para entrar na sala de cinema: </Text>

      <TextInput
        style={styles.textinput}
        placeholder='E-mail:'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder='Password:'
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCad} onPress={navigateToCadastro}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2C849',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#D93E30'
  },
  textinput:{
    width: 280,
    height: 50,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },


  buttonCad:{
    color : '#BF7E06',
   
  },

  button: {
    
    backgroundColor: '#D93E30',
    padding: 15,
    margin : 15,
    borderRadius: 20,
    marginLeft : 20
  },
  buttonText: {
    flex : 1,
    marginHorizontal : 100,
    color: 'white',
    fontSize: 18,
   
  },


});

