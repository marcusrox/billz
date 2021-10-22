import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: cores.claro,
            tabBarInactiveTintColor: cores.claro,
            tabBarActiveBackgroundColor: cores.roxo,
            tabBarInactiveBackgroundColor: cores.laranja,
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              //width: '100%',
              flex: 1,
              fontWeight: "bold",
              fontSize: 14,
              //lineHeight: 21,
              //marginTop: 3,
              //paddingTop: 21,
              //backgroundColor: cores.laranja,
            },
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name == "Carrinho") {
                return <Ionicons name={"cart"} size={size} color={color} />;
              } else {
                return <Ionicons name={"ios-list"} size={size} color={color} />;
              }
            },
            tabBarHideOnKeyboard: true,
          })}
        >
          <Tab.Screen name="Serviços" component={Servicos} />
          <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}