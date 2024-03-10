import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import RestaurantCard from './RestaurantCard'
import { restaruants } from '../_mock/Restaurants'

const FeatureRow = ({title,description,id}) => {
  // const [restaruant,setRestaruant] = useState()

  useEffect(()=>{

  },[id])

  return (
    <View>
     <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name='arrow-forward-outline' color="#E33342" size={24} />
     </View>

     <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView 
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        { restaruants.map((restaruant,index)=>(
            <RestaurantCard
            key={index}
            {...restaruant}
            />
          ))}
      </ScrollView>
    </View>
  )
}

export default FeatureRow

const styles = StyleSheet.create({})