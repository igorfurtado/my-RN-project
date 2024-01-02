import { Ref, forwardRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

type InputTextProps = {
  isPassword?: boolean
  disabled?: boolean
} & TextInputProps

const InputText = forwardRef(
  (
    { isPassword = false, disabled = false, ...props }: InputTextProps,
    ref: Ref<TextInput>
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    return (
      <TextInput
        ref={ref}
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
)

export default InputText
