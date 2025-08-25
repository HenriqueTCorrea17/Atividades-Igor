import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function ListaItens({ itens }) {

    const tarefas = ["Estudar React Native", "Fazer exercícios", "Ler um livro", "Beber água"];

    return (
        <View style={styles.container}>

            <Text style={styles.texto}> {tarefas} </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
    },
    texto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "light",
        color: "black",
    },
})