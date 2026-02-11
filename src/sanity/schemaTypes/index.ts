import { type SchemaTypeDefinition } from "sanity"

import { historyType } from "./historyType"
import { leadershipType } from "./leadershipType"
import { partnerType } from "./partnerType"
import { campaignType } from "./campaignType"
import { newsType } from "./newsType"
import { galleryType } from "./galleryType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    historyType,
    leadershipType,
    partnerType,
    campaignType,
    newsType,
    galleryType
  ]
}
