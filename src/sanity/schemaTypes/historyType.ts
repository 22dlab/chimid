import { DocumentTextIcon } from "@sanity/icons"
import { orderRankField } from "@sanity/orderable-document-list"
import { defineArrayMember, defineField, defineType } from "sanity"

export const historyType = defineType({
  name: "history",
  title: "History",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    orderRankField({ type: "history" }),
    defineField({
      name: "title",
      title: "Timeline Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "events",
      title: "Events in This Period",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Event",
          fields: [
            defineField({
              name: "yearRange",
              title: "Year or Range",
              type: "string",
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [
                defineArrayMember({
                  type: "image",
                  options: { hotspot: true }
                })
              ],
              validation: (Rule) =>
                Rule.min(1).max(3).error("Each event must have 1 to 3 images")
            })
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
})
