import { View, Text, SafeAreaView, TouchableOpacity,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Slices/RestaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../Slices/BasketSlice';
import GlobalStyles from '../utils/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemInBsket, setGroupedItemInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    // console.log("Items///>",items);
      const groupedItems = items.reduce((results,item)=>{
        (results[item.id]=results[item.id] || []).push(item)
        return results;
      },{})
      setGroupedItemInBasket(groupedItems)
  },[items])

  return (
    <SafeAreaView className="flex-1 bg-white" style={GlobalStyles.droidSafeArea}>
        <View className="flex-1 bg-gray-100">
          <View className="p-5 border-b border-[#E33342] bg-white shadow-sm">
            <View>
              <Text className="text-lg font-bold text-center">Basket</Text>
              <Text className="text-gray-400 text-center">{restaurant.name}</Text>
            </View>
            
            <TouchableOpacity 
              onPress={navigation.goBack}
              className="rounded-full bg-gray-100 absolute top-3 right-5"
              >
                <Ionicons name="close-circle" size={30} color="#E33342" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={{
              uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png" 
            }}  
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            /> 
            <Text className="flex-1">Delivery in 30 - 35 mins</Text>
            <TouchableOpacity>
              <Text className="text-[#E33342]">Change</Text>
            </TouchableOpacity>
          </View>

            <ScrollView className="divide-y divide-gray-200">
              {Object.entries(groupedItemInBsket).map(([key,items])=>(
                  <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-3">
                  <Text className="text-[#E33342]">{items.length} x </Text>
                  <Image source={{
                    uri:items[0]?.image
                  }} 
                  className="h-12 w-12 rounded-full"
                  />
                 <Text className="flex-1">{items[0]?.name}</Text> 
                 <Text className="text-gray-600">
                    <Currency quantity={items[0]?.price} currency='INR' />
                 </Text>

                 <TouchableOpacity
                  onPress={()=>dispatch(removeFromBasket({ id:key }))}
                 >
                   <Text className="text-[#E33342]">Remove</Text>
                 </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
              <View className="flex-row justify-between">
                  <Text className="text-gray-400">Subtotal</Text>
                  <Text className="text-gray-400">{basketTotal}</Text>
              </View>

              <View className="flex-row justify-between">
                  <Text className="text-gray-400">Delivery charges</Text>
                  <Text className="text-gray-400">45</Text>
              </View>

              <View className="flex-row justify-between">
                  <Text className="text-gray-400">Subtotal</Text>
                  <Text className="text-gray-400">{basketTotal + 45}</Text>
              </View>

              <TouchableOpacity 
              onPress={()=>navigation.navigate("PreparingOrder")}
              className="rounded-lg p-4 bg-[#E33342]"
              >
                <Text className ="text-center text-white text-lg font-bold">
                  Place Order
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen