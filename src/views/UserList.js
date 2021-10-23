import React from 'react'
import { View, FlatList, Alert } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
import users from '../data/users'

export default props => {
    
    function confirmUserDeletion(user) {
        Alert.alert("Confirmação", "Deseja realmente excluir este usuário?", [
          { 
              text: "Sim" ,
              onPress() {
                  console.warn("Excluir usuário " + user.avatarUrl);
              }
        },
          { text: "Não" },
        ]);
    }

    function getUserItem({ item: user }) {
        return (
          <ListItem.Swipeable
            bottomDivider
            onPress={() => props.navigation.navigate("UserForm", user)}
            rightContent={
              <Button
                onPress={() => confirmUserDeletion(user)}
                title="Delete"
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
              />
            }
          >
            <Avatar key={user.id} rounded source={{ uri: user.avatarUrl }} />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.CheckBox /> */}
            <ListItem.Chevron />
          </ListItem.Swipeable>
        );
    }

    return (
      <View>
        <FlatList
          keyExtractor={(user) => user.id.toString()}
          data={users}
          renderItem={getUserItem}
        />
      </View>
    )
}