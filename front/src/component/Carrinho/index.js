import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';


export default function Carrinho({ navigation }) {
  const [quantidade, setQuantidade] = useState(0);

  function add() {
    setQuantidade(quantidade + 1);
  }

  function remove() {

    if (quantidade <= 0) {
      setQuantidade(quantidade)
    } else {
      setQuantidade(quantidade - 1);

    }
  }

  return (

    <View>
      <Text >Tela de carrinho indefinida</Text>
      <Button onPress={add} title="add" />
      <Text>{quantidade}</Text>
      <Button onPress={remove} title="remove" />

      <Button title="perfil" onPress={() => navigation.navigate('Perfil')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );

}

