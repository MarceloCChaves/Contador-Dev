import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Coffee from "../Img/Coffee.png";
import Water from "../Img/Water.png";


function ButtonImage(props){
  return(
    <Image style={s.icon} source={props.image} />
  )
}

function Name(props){
  return(
    <Text style={s.title}>{props.name}</Text>
  )
}

export default function CountButton() {
  const [waterCount, setWaterCount] = useState(0)
  const [coffeeCount, setCoffeeCount] = useState(0)
  const timer = setInterval(myTimer, 1000)

  function coffeeCounting(){
    setCoffeeCount(coffeeCount+1) 
  }
  function waterCounting(){
    setWaterCount(waterCount+1) 
  }

  function myTimer(){
    let hour = new Date()
    let formattedHour = hour.toLocaleTimeString()
    if(formattedHour === '00:00:00'){
      alert('contador zerado')
      setCoffeeCount(0)
      setWaterCount(0)
    }
  }

  myTimer()

  return (
    <View style={s.container}>
      <View style={s.buttons}>
        <TouchableOpacity onPress={coffeeCounting}>
          <View style={s.button}>
            <ButtonImage image={Coffee} />
            <Name name="Coffee"/>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={s.count}>{coffeeCount}</Text>
        </View>
      </View>
      <View style={s.buttons}>
        <TouchableOpacity onPress={waterCounting}>
          <View style={s.button}>
            <ButtonImage image={Water} />
            <Name name="Water"/>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={s.count}>{waterCount}</Text>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  buttons:{
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10
  },
  button: {
    backgroundColor: "#FF0000",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  count: {
    fontSize: 50,
    color: "#fff",
  },
});
