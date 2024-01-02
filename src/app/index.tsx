import { SafeAreaView, StatusBar, View } from 'react-native'

import Button from 'src/components/button'
import InputText from 'src/components/inputs/text-input'
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
        <InputText
          placeholder='E-mail'
          autoFocus
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          autoComplete='email'
        />
        <InputText placeholder='Senha' isPassword />
        <Button title='Meu Botão' />
      </View>
    </SafeAreaView>
  )
}

export default App
