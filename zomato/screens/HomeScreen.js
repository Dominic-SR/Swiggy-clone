import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
const navigation = useNavigation();

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown: false,
  })
},[])

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        <Image 
        source={{
          uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png" 
        }} 
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
        <Text className="font-bold text-grey-400 text-xs">Deliver Now</Text>
        <Text className="font-bold text-xl">
          Current Location
          <Feather name="chevron-down" size={20} color="#E33342" />
        </Text>
        </View>
        <Ionicons name='person-outline' size={35} color="#E33342" />
      </View>
      
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <Ionicons name='search-outline' size={20} color="gray" />
          <TextInput placeholder='Restaurant and Cuisines' />
        </View>
        <Feather name='sliders' size={20} color="#E33342" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen