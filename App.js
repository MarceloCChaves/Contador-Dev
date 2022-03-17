import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import CountButton from './components/CountButton';

function Titulo(props){
  return(
    <Text style={styles.titulo}>
      {props.nome}
    </Text>
  )
}

export default function App(){
  return (
      <ImageBackground
        source={{uri: "https://spuckpop.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-18-at-20.14.33.jpeg"}}
        resizeMode="cover"
        style={styles.background}
      >
      <View style={styles.container}>
        <StatusBar hidden/>
        <Titulo nome="💻 Contador dos devs 💻"></Titulo>
        <View style={styles.buttons}>
          <CountButton></CountButton>
        </View>
      </View> 
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: "center"
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
  },
  buttons:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
