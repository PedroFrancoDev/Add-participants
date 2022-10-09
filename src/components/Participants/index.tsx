import { View, Text } from 'react-native'
import { Button } from '../Button/index'
import { styles } from './styles'

interface ParticipantsProps {
    name: string,
    onRemove: () => void
}

export function Participants({ name, onRemove }: ParticipantsProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Button TextButton="-" Style={styles.button} OnPress={onRemove} />
        </View>
    )
}