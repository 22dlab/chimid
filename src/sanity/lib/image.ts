import type { ImageType } from "@/type"

export const imageSource = (source?: ImageType) => {
  if (!source?.asset) {
    return undefined
  }

  const url = source && source?.asset?.url
  const blur = source?.asset?.metadata?.lqip
  const width = source?.asset?.metadata?.dimensions?.width
  const height = source?.asset?.metadata?.dimensions?.height
  return { url, blur, width, height }
}
