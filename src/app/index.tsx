import { SafeAreaView, StatusBar, TextInput, View } from 'react-native'

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
      <View style={[styles.sectionContainer]}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#aaa'
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor='#aaa'
          secureTextEntry
        />
        <Button title='Meu Botão' />
      </View>
    </SafeAreaView>
  )
}

export default App
