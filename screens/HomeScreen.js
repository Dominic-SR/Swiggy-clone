import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import sanityClient from '../sanity'
import Categories from '../components/Categories'
import FeatureRow from '../components/FeatureRow'
import { featuredCategories } from '../_mock/FeaturedCategory'
import GlobalStyles from '../utils/GlobalStyle';

const HomeScreen = () => {
const navigation = useNavigation();
// const [featuredCategory, setFeaturedCategory] = useState([])

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown: false,
  })
},[])



// console.log("t",featuredCategory);
  return (
    <SafeAreaView className="bg-white pt-5" style={GlobalStyles.droidSafeArea}>
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

      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
         <Categories />
      {featuredCategories.map((category)=>(
              <FeatureRow 
                key={category.id}
                id={category.id}
                title={category.name}
                description={category.short_description}
              />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen