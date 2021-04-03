import { Dimentions, PixelRatio } from 'react-native'

const { height, width } = Dimentions.get('window')
const figmaWidth = 375

const wp = (widthPercent) => {
  PixelRatio.roundToNearestPixel((width * parseFloat(widthPercent)) / 100,)
}

const hp = (heightPercent) => {
  PixelRatio.roundToNearestPixel((height * parseFloat(heightPercent)) / 100,)
}

const px = (valuePx) => {
  PixelRatio.roundToNearestPixel((width * parseFloat((valuePx / figmaWidth) * 100)) / 100,)
}

export const metrics = {
  wp, hp, px
}