import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {

const categories = [
    {id:1 , title:"Desert", imgUrl:"https://img.freepik.com/free-photo/grilled-chicken-nuggets-bowl-crackers-spices-sauce-side-view_141793-3132.jpg?t=st=1709987576~exp=1709991176~hmac=a9d8619d1f4181ab217547b5de6cf5693a235e1b825f92ef9c22daef2a6eb990&w=1380"},
    {id:2 , title:"Burger", imgUrl:"https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?t=st=1709987664~exp=1709991264~hmac=2864b3077738f1731cb4a02905c3f347f29a9284139f1c59d09c9204228cbfa0&w=1380"},
    {id:3 , title:"French Fries", imgUrl:"https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?t=st=1709987790~exp=1709991390~hmac=cc416065fc6c8450781b5dc543caf5b1c1d68bc6a46d98c03fb712119247adee&w=1380"},
    {id:4 , title:"Chines", imgUrl:"https://img.freepik.com/free-photo/fried-chicken-with-red-green-chili-peppers-onion-plate_141793-1657.jpg?t=st=1710003348~exp=1710006948~hmac=6c472dd4d035790b166e1a9e04af353da8d0602c8fc086161dedbaf834a10041&w=740"},
    {id:5 , title:"Crispy Chicken", imgUrl:"https://img.freepik.com/free-photo/fried-chicken-french-fries-black-cement-floor_1150-28542.jpg?t=st=1710003464~exp=1710007064~hmac=f629b08c8e22f704e4ff78229fecb8b836d207f0d6543709b8dfc45f0c612905&w=1380"},
    {id:3 , title:"Biriyani", imgUrl:"https://img.freepik.com/free-photo/top-view-pakistan-meal-assortment_23-2148821514.jpg?t=st=1710003556~exp=1710007156~hmac=25e20e3c8c16edb19ce0cbcb9dc980d61ba73baff4845f1562f29bb0c8d30fb1&w=740"},
    {id:3 , title:"Fried Chicken", imgUrl:"https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-tomato-sauce_1150-20213.jpg?t=st=1710003638~exp=1710007238~hmac=e75c7854035efbd76a468c136d6d71fbf85b4eb4f7a5070437d0204c9599b20d&w=1380"}

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