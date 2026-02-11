import { UserIcon } from "@sanity/icons"
import { orderRankField } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

export const leadershipType = defineType({
  name: "leadership",
  title: "Leadership",
  type: "document",
  icon: UserIcon,
  fields: [
    orderRankField({ type: "leadership" }),
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "profile",
      type: "image"
    }),
    defineField({
      name: "position",
      type: "string",
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "profile"
    }
  }
})
