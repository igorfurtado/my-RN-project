import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

type InputTextProps = {
  isPassword?: boolean
  disabled?: boolean
} & TextInputProps

const InputText = ({
  isPassword = false,
  disabled = false,

  ...props
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholderTextColor='#aaa'
      secureTextEntry={isPassword}
      editable={!disabled}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}

export default InputText
