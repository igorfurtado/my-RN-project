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
    sectionContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 28,
      gap: 16
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#888',
      borderRadius: 8,
      height: 48,
      paddingHorizontal: 16,
      color: '#333'
    }
  })

  return {
    styles,
    isDarkMode,
    backgroundStyle
  }
}

export default useAppStyles
