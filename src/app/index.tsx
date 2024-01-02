import { SafeAreaView, StatusBar, TextInput, View } from 'react-native'

import { useRef } from 'react'
import Button from 'src/components/button'
import InputText from 'src/components/inputs/text-input'
import useAppStyles from './styles/use-styles'

const App = (): JSX.Element => {
  const { styles, backgroundStyle, isDarkMode } = useAppStyles()
  const passwordInputRef = useRef<TextInput>(null)

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
          returnKeyType='next'
          onSubmitEditing={() => passwordInputRef?.current?.focus()}
        />
        <InputText
          ref={passwordInputRef}
          placeholder='Senha'
          isPassword
          returnKeyType='done'
        />
        <Button title='Entrar' />
      </View>
    </SafeAreaView>
  )
}

export default App
