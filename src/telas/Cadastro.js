import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Logo from '../componentes/Logo';
import { useNavigation } from '@react-navigation/native';  // Importe useNavigation
import Login from './Login';


export default function Cadastro({e}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const navigation = useNavigation();  // Adicione isso para obter a propriedade de navegação
    const handleCadastro = () => {
        console.log('entrou na função')
        // Lógica de cadastro
        if (email && senha && senha === confirmarSenha) {
            // Lógica de cadastro bem-sucedida
            alert('Cadastro realizado com sucesso');

            //falta armazenar os dados
            navigation.navigate('Login'); // Redireciona para a tela de login
        } else {
            alert('Preencha todos os campos corretamente e confirme a senha.');
        }
    };


    return (
        <View style={styles.container}>
            <Logo />
            
            <TextInput
                style={styles.textinput}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            
            <TextInput
                style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
        
            <TextInput
                style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                value={confirmarSenha}
                onChangeText={(text) => setConfirmarSenha(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
    //exports.
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2C849',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textinput: {
        width: 280,
        height: 50,
        borderColor: '#000',
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#D93E30',
        padding: 15,
        margin: 15,
        borderRadius: 20,
        marginLeft: 20
    },
    buttonText: {
        flex : 1,
        marginHorizontal : 100,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

