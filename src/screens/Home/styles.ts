import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#131016",
    },
    eventName: {
        color: "#fdfcfe",
        fontSize: 24,
        marginTop: 48,
        fontWeight: "bold"
    },
    eventDate: {
        color: "#6b6b6b",
        fontSize: 16
    },
    input: {
        flex: 1,
        color: "#fff",
        height: 56,
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        borderRadius: 5,
        backgroundColor: "#1f1e25", 
    },
    form: {
        marginTop: 36,
        marginBottom: 42,
        flexDirection: "row",
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",

        alignItems: "center",
        justifyContent: "center"
    },
    EmptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    TextEmpty: {
        color: "#eee"
    }
})