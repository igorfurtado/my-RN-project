import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
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
            style={{
              color: isDarkMode ? Colors.white : Colors.black,
              textAlign: 'center'
            }}
          >
            Hello world!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    paddingHorizontal: 24
  }
})

export default App
