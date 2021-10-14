import React from 'react';
import { Text, SafeAreaView, StatusBar, FlatList } from "react-native";

const contas = [
  {
    id: 1,
    nome: "Net/Claro",
    valor: 123.56,
    descricao: "Conta de internet e celular e TV",
  },
  {
    id: 2,
    nome: "Coelba",
    valor: 323.56,
    descricao: "Conta de energia alétrica",
  },
  {
    id: 3,
    nome: "Condomínio Villa",
    valor: 423.56,
    descricao: "Conta de condominio do Villa Privilege",
  },
];

export default function Contas() {
    return (
      <SafeAreaView>
        <StatusBar />
        <Text>Contas!!!</Text>
        <FlatList
            data={contas}
            renderItem={({item}) => <Text>{item.nome}</Text>}
            keyExtractor={({id}) => String(id)}
        />
      </SafeAreaView>
    );
}
