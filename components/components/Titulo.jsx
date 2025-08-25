import {Text, View, StyleSheet} from "react-native";

export default function Titulo({titulo }) {
    return (
        <View>
            <Text style={styles.titulo}> {titulo} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    titulo: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: "bold",
        color: "black"
    }
})