import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Ajuda from '../screens/Ajuda';
import Contato from '../screens/Contato';
import Sobre from '../screens/Sobre';
import CustomDrawer from '../components/customDrawer'

export default function Routes() {
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
    drawerContent={CustomDrawer}
    screenOptions={{
        drawerActiveBackgroundColor: 'beige',
        drawerInactiveBackgroundColor: 'white',
        drawerActiveTintColor: 'alicewhite',
        drawerInactiveTintColor: 'alicewhite',
        }
      }
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ajuda" component={Ajuda} />
        <Drawer.Screen name="Contato" component={Contato} />
        <Drawer.Screen name="Sobre" component={Sobre} />

    </Drawer.Navigator>
  )
}