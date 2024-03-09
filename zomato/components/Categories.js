import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {

const categories = [
    {id:1 , title:"Desert", imgUrl:"https://img.freepik.com/free-photo/grilled-chicken-nuggets-bowl-crackers-spices-sauce-side-view_141793-3132.jpg?t=st=1709987576~exp=1709991176~hmac=a9d8619d1f4181ab217547b5de6cf5693a235e1b825f92ef9c22daef2a6eb990&w=1380"},
    {id:2 , title:"Burger", imgUrl:"https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?t=st=1709987664~exp=1709991264~hmac=2864b3077738f1731cb4a02905c3f347f29a9284139f1c59d09c9204228cbfa0&w=1380"},
    {id:3 , title:"French Fries", imgUrl:"https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?t=st=1709987790~exp=1709991390~hmac=cc416065fc6c8450781b5dc543caf5b1c1d68bc6a46d98c03fb712119247adee&w=1380"}

]
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