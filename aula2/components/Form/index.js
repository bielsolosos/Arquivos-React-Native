import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Form() {
  return (
    <View>
        <View>
            <Text> Altura </Text>
            <TextInput placeholder='Ex: 1.59' keyboardType='number-pad' />
            <Text> Peso </Text>
            <TextInput placeholder='Ex: 58' keyboardType='number-pad' />
            <Button title="Cálculo do IMC"/>
        </View>
    </View>
  )
}