import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../utils/GlobalStyle';


const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("Delivery")
    },5000)
  },[])

  return (
    <SafeAreaView className="bg-[#ee5d69] flex-1 justify-center items-center" style={GlobalStyles.droidSafeArea}>
      <Animatable.Image 
        source={require("../assets/order_loading.gif")}
        animation="slideInUp"
        iterationCount={3}
        className="h-96 w-96"
      />
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center">
        Waiting for restaurant to accept your order!
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen

// https://e7.pngegg.com/pngimages/8/979/png-clipart-graphics-delivery-illustration-motorcycle-delivery-food-logo-motorcycle.png

// https://cdn.dribbble.com/users/1545362/screenshots/4342064/media/c203f5c7f1375ab7dffcecd6aedcae46.gif