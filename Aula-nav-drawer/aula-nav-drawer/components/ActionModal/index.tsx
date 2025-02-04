import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

export default function ActionModal(handleClose:any, handleTexto:any, handleContact:any) {
  return (
    <SafeAreaView style={styles.container}>

        <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}>
            <Text>Teste</Text>
        </TouchableOpacity>


    <View>
        <TouchableOpacity style={styles.actionButton} onPress={() => {handleTexto}}>
                <Text style={styles.content}> INFORMAÇÔES</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => {handleContact}} >
            <Text style={styles.content}> Contato</Text>
        </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButton: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
}
)