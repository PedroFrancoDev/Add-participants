import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1f1e25",
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: "#fff",
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#e23c44",

        alignItems: "center",
        justifyContent: "center"
    }
})