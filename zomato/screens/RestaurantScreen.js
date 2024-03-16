import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';
import { setRestaurant } from '../Slices/RestaurantSlice';
import { useDispatch } from 'react-redux';
import { Feather, Ionicons } from '@expo/vector-icons';
import DishShow from '../components/DishShow';
import Basket from '../components/Basket';

const RestaurantScreen = () => {
const navigation = useNavigation();
const dispatch = useDispatch()

  const {params:{
    id,
    image,
    name,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat     
  }} = useRoute()

  useEffect(()=>{
    dispatch(setRestaurant({
      id,
      image,
      name,
      rating,
      address,
      short_description,
      dishes,
      long,
      lat     
    }))
  },[])
  

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <>
    <Basket />
    <ScrollView>
      <View>
        <Image 
          source = {{uri : image}}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={navigation.goBack} 
          className="absolute top-14 left-5 p-2 rounded-full bg-gray-100"        
        >
          <Ionicons name='arrow-back' size={20} color="E33342/" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{name}</Text>
          <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Ionicons name='star' size={22} color="#fcc203" />
                <Text className="text-xs text-gray-500">
                <Text className="text-yellow-500">{rating}</Text> - Offers
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Ionicons name='location-outline' size={22} color="#fcc203" />
                <Text className="text-xs text-gray-500">NearBy - {address}</Text>
              </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <Ionicons name ="help-circle" size={20} color="gray" />
              <Text className="pl-2 flex-1 text-md text-xl">
                Have any food alergy ?
              </Text>
              <Feather name="chevron-right" size={20} color={"#E33342"} />
            </TouchableOpacity>
      </View>


      <View className="pb36">
          <Text className="px-4 p-4 mb-3 font-bold text-xl">Menu</Text>
          {
            dishes.map((dish)=>(
              <DishShow key={dish.id} id={dish.id} {...dish} />
            ))
          }
      </View> 
    </ScrollView>
    </>
  )
}

export default RestaurantScreen