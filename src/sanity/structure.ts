import type { StructureResolver } from "sanity/structure"
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"

import {
  TimelineIcon,
  UserIcon,
  ClipboardIcon,
  BlockContentIcon,
  ImageIcon,
  UsersIcon
} from "@sanity/icons"

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        title: "Timeline",
        type: "history",
        icon: TimelineIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: "Campaigns",
        type: "campaign",
        icon: ClipboardIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: "Partners",
        type: "partner",
        icon: UsersIcon,
        S,
        context
      }),
      orderableDocumentListDeskItem({
        title: "Leadership Team",
        type: "leadership",
        icon: UserIcon,
        S,
        context
      }),
      S.divider(),
      S.documentTypeListItem("news").title("News").icon(BlockContentIcon),
      S.documentTypeListItem("gallery").title("Gallery").icon(ImageIcon)
    ])
