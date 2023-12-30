import { Platform, StatusBar } from 'react-native'

const statusBarHeight = (): number => {
  return Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0
}

export { statusBarHeight }
