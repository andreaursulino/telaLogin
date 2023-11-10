
import { StyleSheet, Text, View} from 'react-native';

import Logo from '../componentes/Logo';
import Entrou from '../componentes/entrou';
export default function Acessar() {


  return (
    <View style={styles.container}>
      <Entrou></Entrou>
      <Text style={styles.texto}>Bem-vindo a sala de cinema, espero que goste do filme!
       "Para o cinéfilo a vida é feita de filmes e pipocas."</Text>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F26835',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold'
    
  },
 


});