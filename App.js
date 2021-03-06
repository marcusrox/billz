import React from "react";
import {Button, Icon} from "react-native-elements";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "./src/views/UserList";
import UserForm from "./src/views/UserForm";
import { UsersProvider } from "./src/context/UsersContext";


//import Rotas from './src/Rotas';
//import TelaPadrao from './src/componentes/TelaPadrao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Lista de Usuários",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#FFF" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Formulário de Usuário",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
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
