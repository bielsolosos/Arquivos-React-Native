import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justfyContext: "center",
        }}
      >
        <Image
          source={require("../../assets/perfil.png")}
          style={{ width: 65, height: 65 }}
          />
          <Text>Seja bem vindo!</Text>

      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
