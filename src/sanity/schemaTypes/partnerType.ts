import { orderRankField } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

export const partnerType = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    orderRankField({ type: "partner" }),
    defineField({
      name: "photo",
      type: "image",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "photo"
    }
  }
})
