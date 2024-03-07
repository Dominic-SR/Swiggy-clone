import {defineField, defineType} from 'sanity'

export default{
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation: (Rule) => Rule.required(), 
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image'
    },
    {
      name: 'price',
      title: 'Price of the Dish',
      type: 'number'
    },
    
  ], 
}