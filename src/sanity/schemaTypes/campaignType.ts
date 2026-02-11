import { orderRankField } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

export const campaignType = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    orderRankField({ type: "campaing" }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Legal Education", value: "legalEducation" },
          { title: "Public Outreach", value: "publicOutreach" }
        ],
        layout: "radio"
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
