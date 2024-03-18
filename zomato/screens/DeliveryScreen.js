import { View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../Slices/RestaurantSlice';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../utils/GlobalStyle';
import * as Progress from "react-native-progress";
import MapView,{Marker} from "react-native-maps"

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)

  console.log("111111",restaurant.name);
  return (
    <View className="bg-[#E33342] flex-1" >
      <SafeAreaView className="z-50" style={GlobalStyles.droidSafeArea}>
          <View className="flex-row justify-between items-center p-5">
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name='close' size={30} color="white" />
              </TouchableOpacity>
              <Text className="font-light text-white text-lg">Order help</Text>
          </View>

          <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg text-gray-400">Esstimated Arrival</Text>
                  <Text className="text-4xl font-bold">30 - 35 mins</Text>
                </View>
                <Image source={require("../assets/delivery.png")} className="h-14 w-14" />
              </View>
              <Progress.Bar 
              size={30}
              color='#E33342'
              indeterminate={true}
              className="mt-2"
              />

              <Text className="mt-3 text-gray-500">
                Your order at {restaurant.name} is being prepared
              </Text>
          </View>
      </SafeAreaView>

      <MapView 
      // initialRegion={{
      //   latitude:restaurant.lat,
      //   longitude:restaurant.long,
      //   latitudeDelta:0.005,
      //   longitudeDelta:0.005,
      // }}
      className="flex-1 -mt-10 z-0"
      mapType='mutedStandard'
      >
        <Marker
          // coordinate={{
          //   latitude:restaurant.lat,
          //   longitude:restaurant.long,
          // }}
          title={restaurant.name}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#E33342'
        />
      </MapView>
    </View>
  )
}

export default DeliveryScreen