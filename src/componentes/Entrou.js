import { Image , StyleSheet} from "react-native";
export default function Entrou(){
    return (
        <Image style = {styles.logo} source={require('../../assets/telacinema.jpg')}></Image>
      
    );
}

const styles = StyleSheet.create({
    logo : {

        height : 400, 
        width: 700
        
    }

})