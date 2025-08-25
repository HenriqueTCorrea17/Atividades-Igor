import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";
import Cartao from "./components/Cartao";
import Botao from "./components/Botao";
import ListaItens from "./components/ListaItens";
import CampoTexto from "./components/CampoTexto";

export default function App() {
  const [numero, setNumero] = useState(0);

  return (
      <View style={styles.container}>
        <Titulo titulo={"Bem Vindo!"} />

        <Cartao nome={"Henrique Tossatto Correa"} imagem={require("./assets/icon.png")}
        texto={"Tenho 17 anos e moro no interior de São Paulo, em Birigui. Gosto muito" +
            "de ajudar meu pai em sua loja, onde trabalho como designer de bordado, esse" +
            "trabalho consiste em criar os programas de bordado para serem enviados para as máquinas."}/>

          <Botao/>

          <ListaItens/>

          <CampoTexto/>

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})