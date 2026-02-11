import { orderRankField } from "@sanity/orderable-document-list"
import { defineType, defineField } from "sanity"

export const newsType = defineType({
  name: "news",
  title: "News",
  type: "document",
  preview: {
    select: {
      title: "title",
      media: "thumbnail"
    }
  },
  fields: [
    orderRankField({ type: "news" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" }
          ]
        },
        {
          type: "image"
        }
      ]
    })
  ]
})
