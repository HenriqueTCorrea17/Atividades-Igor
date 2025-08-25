import {Text, View, StyleSheet, Image} from "react-native";

export default function Cartao({nome, imagem, texto }) {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}> {nome} </Text>

            <Image style={styles.img} source={imagem}/>

            <Text style={styles.texto}> {texto} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
    },
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
    texto: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "light",
      color: "black",
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
})