import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'

const DishShow = ({
    id,
    name,
    short_description,
    price,
    image
}) => {
  return (
    <TouchableOpacity>
        <View className="flex-row">
            <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{short_description}</Text>
                <Text className="text-gray-400 mt-2">
                    <Currency quantity={price} Currency="INR" />
                </Text>
            </View>
           
            <View>
                <Image
                    style={{
                        borderWidth: 1,
                        borderColor: "#f3f3f4"
                    }}
                    source={{uri:image}}
                    className="h-20 w-20 bg-gray-300 p-4"
                />
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default DishShow

const styles = StyleSheet.create({})