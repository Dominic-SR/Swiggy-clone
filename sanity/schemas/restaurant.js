import {defineField, defineType} from 'sanity'
import category from './category'

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
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
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number'
    },
    {
      name: 'long',
      title: 'Longtitude of the Restaurant',
      type: 'number'
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value between 1 and 5"),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to:[{type: "category"}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type:'array',
      of: [{type: 'reference', to :[{type: "dish"}]}],
      validation: (Rule) => Rule.required(),
    },

  ]
}
