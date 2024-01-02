import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'

import Button from 'src/components/button'
import useAppStyles from './styles/use-styles'

const App = (): JSX.Element => {
  const { styles, backgroundStyle, isDarkMode } = useAppStyles()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        animated
        translucent
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.sectionContainer]}>
          <Button title='Meu Botão' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
