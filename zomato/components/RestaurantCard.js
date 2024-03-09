import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    image,
    rating,
    address,
    short_descriptio,
    dishes,
    long,
    lat
}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity className="bg-white mr-3 shadow" onPress={()=>{
        navigation.navigate("Restaurant",{
            id,
            image,
            rating,
            address,
            short_description,
            dishes,
            long,
            lat     
        });
    }}> 

    <Image
        source={{
            uri: image
        }}
        className="h-36 w-64 rounded-sm"
        />
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})