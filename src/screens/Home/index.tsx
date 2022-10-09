import { Text, View, TextInput, FlatList, Alert } from 'react-native'
import { Participants } from '../../components/Participants/index'
import { useState } from 'react'
import { Button } from '../../components/Button/index'
import { styles } from './styles'

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");


    function handleRemove(name: string) {
        return Alert.alert("Remover participante", `Pretendes remover o participante ${name}?`, [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Remover",
                onPress: () => setParticipants(currentParticipants => currentParticipants.filter(participant => participant !== name))
            }
        ])
    }

    function handleAddParticipant() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existente!", "Já existe um participante na lista com esse nome.")
        } else if (participantName === "") {
            return Alert.alert("Campo vázio.", "Escreva um nome no campo!")
        }

        setParticipants([...participants, participantName])
        setParticipantName("")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Adicionando Participantes.</Text>
            <Text style={styles.eventDate} >
                Sexta, 4 de Novembro de 2022</Text>
            <View style={styles.form}>
                <TextInput
                    value={participantName}
                    style={styles.input}
                    placeholderTextColor="#6b6b6b"
                    placeholder="Nome do participante"
                    onChangeText={participant => setParticipantName(participant)}
                />
                <Button TextButton="+" Style={styles.button} OnPress={handleAddParticipant} />
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participants
                        key={item}
                        name={item}
                        onRemove={() => handleRemove(item)}
                    />
                )}

                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.EmptyContainer}>
                        <Text style={styles.TextEmpty}>Sem nenhum participante!</Text>
                        <Text style={styles.TextEmpty}>Por favor adicione um.</Text>
                    </View>
                )}
            />
        </View>
    )
}