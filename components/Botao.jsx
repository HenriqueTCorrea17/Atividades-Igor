import {Text, View, StyleSheet, Image, Button, Alert} from "react-native";

export default function Botao({}) {

    function alerta() {
        Alert.alert("Você Clicou no botão!")
    }

    return (
        <View>

            <Button title={"Clique Aqui!"} onPress={alerta} color={"black"} ></Button>

        </View>
    )
}