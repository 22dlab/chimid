export type ImageType = {
  asset: {
    url: string
    metadata: {
      lqip: string
      dimensions?: {
        aspectRatio?: number
        width?: number
        height?: number
      }
    }
  }
}
