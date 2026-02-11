import { defineField, defineType } from "sanity"

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "photo",
      type: "image",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "caption",
      type: "string",
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: "caption",
      media: "photo"
    }
  }
})
