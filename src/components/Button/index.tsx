import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
    Style: any,
    TextButton: string,
    OnPress?: () => void
}

export function Button({ TextButton, Style, OnPress }: ButtonProps) {
    return (
        <TouchableOpacity style={Style} onPress={OnPress}>
            <Text style={styles.buttonText}>
                {TextButton}
            </Text>
        </TouchableOpacity>
    )
}