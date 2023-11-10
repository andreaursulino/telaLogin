import { Image , StyleSheet} from "react-native";
export default function Logo(){
    return (
        <Image style = {styles.logo} source={require('../../assets/logocinema.png')}></Image>
      
    );
}

const styles = StyleSheet.create({
    logo : {

        height : 400, 
        width: 300,
        
    }

})