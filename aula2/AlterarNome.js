import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const[nome,setNome]= useState('');

  function buscarNome(nome){
   /* if(nome.lenght > 0){
      setNome('insira um nome por favor!');
    } else{
    setNome("seja bem vindo! " +  nome);
    } */
    nome.lenght > 0 ? setNome('escreva algo') : setNome("seja bem vindo! " + nome);  
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite algo por favor!!!" onChangeText={(texto) => buscarNome(texto)} />
      
      <Text style={styles.texto}>{nome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    borderWidth: 20,
  },
  input:{
    height:40,
    borderWidth:2,
    margin: 30,
    padding:10,
    fontSize:20,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  }
});
