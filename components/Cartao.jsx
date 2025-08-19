import {Text, View, StyleSheet, Image} from "react-native";

export default function Cartao({nome, imagem }) {
    return (
        <View>
            <Text style={styles.nome}> {nome} </Text>

            <Image style={styles.img} source={imagem}/>

        </View>
    )
}

const styles = StyleSheet.create({

    titulo: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: "bold",
        color: "black"
    },
    nome: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "light",
        color: "black",
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
})