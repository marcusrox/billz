import React, { useContext, useState } from "react"
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { Avatar } from "react-native-elements";
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ?  route.params : {} )
  const { dispatch } = useContext(UsersContext)
  //console.warn(props.route.params.avatarUrl)
  return (
    <View style={style.form}>
      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o nome"
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o e-mail"
        value={user.email}
      />
      <Text>Avatar URL</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Informe a URL do avatar"
        value={user.avatarUrl}
      />
      <Button 
        title="Salvar" 
        onPress={() => {
            dispatch({
                type: user.id ? 'updateUser' : 'createUser',
                payload: user,
            })
            navigation.goBack()
        }} 
    />
      {/* <Avatar rounded source={{ uri: user.avatarUrl }} />
      <Avatar rounded icon={{ name: "home" }} />
      <Avatar rounded containerStyle={{ backgroundColor: "#999" }} title="MD" /> */}
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginBottom: 6,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 14,
    backgroundColor: "#e3e3e3",
  },
  form: {
    padding: 12,
  },
});