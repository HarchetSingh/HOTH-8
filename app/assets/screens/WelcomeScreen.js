import React from 'react';
import { ImageBackground, View, PlatformColor, StyleSheet, Image} from 'react-native';

//import MainScreen from './app/assets/screens/MainScreen';
import Swiper from "react-native-swiper";


function WelcomeScreen(props) {
    return (
     <Swiper>

        <View
          style = {styles.mainBackground}
        >
            <View style = {styles.logoContainer}>
                <Image source ={require('/Users/harchetsingh/DoneWithIt/app/assets/logo1.png')}/>
            </View>

            <View style = {styles.loginButton}>


            </View>
            <View style = {styles.registerButton}>


            </View>


        </View>
         <View
          style = {styles.mainBackground}
        >
            <View style = {styles.logoContainer}>
                <Image source ={require('/Users/harchetsingh/DoneWithIt/app/assets/logo1.png')}/>
            </View>

            <View style = {styles.loginButton}>


            </View>
            <View style = {styles.registerButton}>


            </View>


        </View>

        


     </Swiper>
       
    );   
}

const styles = StyleSheet.create({
    mainBackground: {
        backgroundColor : "#e2b6cf",
        flex: 1,
        justifyContent:"flex-end",
        
    },
    loginButton: {
        width: "100%",
        height: "25%",
        backgroundColor: "#f6efee"
    },
    registerButton: {
        width: "100%",
        height: "25%",
        backgroundColor: "#cce8cc"

    },
    logo: {
        width: 100,
        height: 100,
        


    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center",
        paddingLeft: 100,
        

    }

}
)



export default WelcomeScreen;

