import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>Eu acho a Julia muito linda</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
})