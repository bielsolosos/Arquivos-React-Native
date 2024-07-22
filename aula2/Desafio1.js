import { View, Text, FlatList, TextInput, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [alunos, setAlunos] = useState([""])
  const [nome, setNome] = useState("")


  const adicionarTexto = () => {
    if (nome.trim() !== "") {
      setAlunos([...alunos, nome])
      setNome("")
    }
  }
    return (
    <View style={styles.container}>
        <TextInput  style={styles.input} placeholder='Digite um nome' value={nome} onChangeText={setNome}/>
        <Button title='adicionar' onPress={adicionarTexto}>Adicionar</Button>
        <FlatList data={alunos} renderItem={({item}) => <Aluno data={item}/>}/>
    </View>
  )
}

function Aluno(props) {
    return(
        <View style={styles.aluno} >
            <Text style={styles.texto}>{props.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    aluno:{
        marginTop:2
    },
    texto:{
        color:"black",
        fontSize:50
    },
    input:{
        height:40,
        borderWidth:2,
        margin: 30,
        padding:10,
        fontSize:20,
      },
    botao:{

    }

})