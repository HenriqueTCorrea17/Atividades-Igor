import {Text, View, StyleSheet, Image, Button, Alert, TextInput} from "react-native";
import {useState} from "react";

export default function CampoTexto({}) {

    const [nome, setNome] = useState("")

    function alerta() {
        Alert.alert(nome)
    }

    return (
        <View>

            <TextInput style={styles.texto} placeholder={"Digite seu nome:"} value={nome} onChangeText={setNome}/>

            <Button title={"Clique Aqui!"} onPress={alerta} color={"black"} ></Button>

        </View>
    )
}

const styles = StyleSheet.create({

    texto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "light",
        color: "black",
    },
})