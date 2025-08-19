import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";
import Cartao from "./components/Cartao";

export default function App() {
  const [numero, setNumero] = useState(0);

  return (
      <View style={styles.container}>
        <Titulo titulo={"Bem Vindo!"} />

        <Cartao nome={"Henrique Tossatto Correa"} imagem={require("./assets/icon.png")}/>

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