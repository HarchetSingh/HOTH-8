import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableNativeFeedback,
    Button,
    Alert,
    Platform,
    


  } from 'react-native';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';

export default function App() {
  
  return (
    
  

    <WelcomeScreen />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ?  20 : 0,
    
  },
 
});
