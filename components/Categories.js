import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../_mock/Categories'

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    >
        {
            categories.map((category)=>(
                <CategoryCard 
                key={category.id}
                imgUrl={category.imgUrl}
                title={category.title}
                />

            ))
        }
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})