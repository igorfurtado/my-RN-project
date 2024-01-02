import { SafeAreaView, StatusBar, TextInput, View } from 'react-native'

import { useRef, useState } from 'react'
import Button from 'src/components/button'
import InputText from 'src/components/inputs/text-input'
import useAppStyles from './styles/use-styles'

const App = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { styles, backgroundStyle, isDarkMode } = useAppStyles()
  const passwordInputRef = useRef<TextInput>(null)

  const handleSubmit = () => {
    console.log({
      email,
      password
    })
  }

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
          value={email}
          placeholder='E-mail'
          autoFocus
          keyboardType='email-address'
          autoComplete='email'
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType='next'
          onSubmitEditing={() => passwordInputRef?.current?.focus()}
          onChangeText={setEmail}
        />
        <InputText
          ref={passwordInputRef}
          value={password}
          placeholder='Senha'
          isPassword
          returnKeyType='done'
          onChange={(event) => setPassword(event.nativeEvent.text)}
          onSubmitEditing={handleSubmit}
        />
        <Button title='Entrar' onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  )
}

export default App
