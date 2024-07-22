import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Jorge", idade: 24, email: "jorge1@gmail.com" },
    { id: 2, nome: "Ana", idade: 22, email: "ana@gmail.com" },
    { id: 3, nome: "Carlos", idade: 23, email: "carlos@gmail.com" },
    { id: 4, nome: "Maria", idade: 21, email: "maria@gmail.com" },
    { id: 5, nome: "Pedro", idade: 25, email: "pedro@gmail.com" },
    { id: 6, nome: "Julia", idade: 24, email: "julia@gmail.com" },
    { id: 7, nome: "Fernando", idade: 22, email: "fernando@gmail.com" },
    { id: 8, nome: "Paula", idade: 23, email: "paula@gmail.com" }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={alunos}
        renderItem={({ item }) => <Aluno data={item} />}
      />
    </View>
  );
}

function Aluno(props) {
  return (
    <View style={styles.aluno}>
      <Text style={styles.texto}>Nome: {props.data.nome}</Text>
      <Text style={styles.texto}>Idade: {props.data.idade}</Text>
      <Text style={styles.texto}>Email: {props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#f8f8f8",
  },
  aluno: {
    backgroundColor: "#121212",
    height: 100,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
});
