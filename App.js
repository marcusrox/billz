import React from "react";
import {Button, Icon} from "react-native-elements";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "./src/views/UserList";
import UserForm from "./src/views/UserForm";


//import Rotas from './src/Rotas';
//import TelaPadrao from './src/componentes/TelaPadrao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="UserList" 
            component={UserList} 
            options={() => { 
                return {
                  title: "Formulário de Usuário",
                  headerRight: () => (
                    <Button
                      type="clear"
                      icon={<Icon name="add" size={25} color="#FFF" />}
                    />
                  ),
                };
             }}
        />
        <Stack.Screen name="UserForm" 
            component={UserForm} 
            options={{ 
                title: 'Formulário de Usuário'
             }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#FFF",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
