import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import {AntDesign} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import { addtoBasket, selectedBasketItemsWithId,removeFromBasket } from '../Slices/BasketSlice';

const DishShow = ({
    id,
    name,
    short_description,
    price,
    image
}) => {

const [isPressed, setIsPressed] = useState(false);

const items = useSelector((state)=> selectedBasketItemsWithId(state, id));

const dispatch = useDispatch();

const addItemsToBasket = () =>{
    dispatch(addtoBasket({id,name,short_description,price,image}))
}

const removeItemFromBasket = () =>{
    if(!items.length > 0) return;
    dispatch(removeFromBasket({id}))
}

return (
    <>
    <TouchableOpacity 
    className ={`bg-white border p-4 border-gray-200 ${ isPressed && "border-p-0" }`}
    onPress={()=>setIsPressed((curr) => !curr)}
    >
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
    {
        isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity
                    onPress={removeItemFromBasket}
                    disabled={!items.length}
                    >
                        <AntDesign 
                        name='minuscircle'
                        color={items.length > 0 ? "#E33342" : "gray"}
                        size={30}
                        />
                    </TouchableOpacity>
                        
                    <Text>{items.length}</Text>

                    <TouchableOpacity onPress={addItemsToBasket}>
                        <AntDesign 
                        name='pluscircle'
                        color="#E33342"
                        size={30}
                        />  
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
    </>
    
  )
}

export default DishShow

const styles = StyleSheet.create({})