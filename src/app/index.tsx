import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'

import useAppStyles from './styles/use-styles'

const App = (): JSX.Element => {
  const { styles, backgroundStyle, isDarkMode } = useAppStyles()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        animated
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.sectionContainer]}>
          <Text
            selectable
            allowFontScaling={false}
            numberOfLines={1}
            style={styles.text}
          >
            Hello world!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
