import { Pressable, PressableProps, Text, View } from 'react-native'
import { styles } from './styles'

type ButtonProps = {
  title: string
  disabled?: boolean
} & PressableProps

const Button = ({ title, disabled = false, ...props }: ButtonProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled
        ]}
        android_ripple={{ color: '#444' }}
        {...props}
      >
        <Text
          style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button
