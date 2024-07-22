import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {

    const [nome,setNome]= useState('');
    const [idade,setIdade]= useState(0);
    const hora = new Date().getHours();
    const [saudacao,setSaudacao]= useState("");
    function modificar(nome,idade){
        setNome(nome);
        setIdade(idade);
    }
    useEffect(()=>{
        hora<12?setSaudacao('Bom dia'):hora<18?setSaudacao("Boa tarde!"):setSaudacao("Boa noite")
    })

  return (
    <View>
        <Button title='alterar Nome' onPress={()=> useNavigate('./index.html')}>
        </Button>
      <Text style={{fontSize:22}}>{nome}</Text>
      <Text>{idade}</Text>
      <Text>
        {saudacao}
      </Text>
    </View>
  )
}