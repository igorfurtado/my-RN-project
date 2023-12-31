import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { statusBarHeight } from 'src/utils/status-bar-height'

const useAppStyles = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const androidSafeMarginTop = statusBarHeight()
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundStyle.backgroundColor,
      marginTop: androidSafeMarginTop
    },
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    sectionContainer: {
      paddingHorizontal: 24
    },
    text: {
      color: isDarkMode ? Colors.white : Colors.black,
      textAlign: 'center'
    }
  })

  return {
    styles,
    isDarkMode,
    backgroundStyle
  }
}

export default useAppStyles
