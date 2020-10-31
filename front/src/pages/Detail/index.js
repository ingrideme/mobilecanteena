import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TouchableOpacityBase, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Detail() {

  const mercadoria = [{ id: 11, nome: "Bala", valor: 0.5, disponiveis: 1024 },{id: 12, nome: "Chiclete", valor: 0.25, disponiveis: 120}];

  function aMap() {
    var prod = mercadoria.map(produto => produto.nome)
    var prod1 = mercadoria.map(produto => produto.valor)
    var prod2 = mercadoria.map(produto => produto.disponiveis)

    
      alert(`Produto: ${prod} \n Valor ${prod1}\n Disponíveis ${prod2}`
    )
  }

  function aFilter() {
    var prod3 = mercadoria.filter(produto => produto.nome === 'Bala')

    
    alert(`Filtrar nome igual a Bala `+prod3)
  }

  function aReduce() {
    setQuantidade(quantidade + 1), setTotal(quantidade * 2)

  }


  return (
    <View style={styles.header} >
      <Text>  Este é oarray normal: </Text>
      <Text>   'id': '11', 'nome': 'Bala', 'valor': '0.5', 'disponiveis': '1024' ,
      </Text>
      <View style={styles.botoesModal}>
        <Button title="map" color="red" onPress={() => { aMap() }} />
        <Button title="filter" color="blue" onPress={() => { aFilter() }} />
        <Button title="reduce" color="green" onPress={() => { aReduce() }} />
      </View>
      <Text>Disponíveis:  </Text>
      <Text>SubTotal:  </Text>
    </View>
  )
}




const styles = StyleSheet.create({
  scrollhor: {
    paddingVertical: "2%",
    paddingHorizontal: '2%',
    marginTop: '3%',
    marginBottom: "4%",
  },
  flat: {
    paddingVertical: "2%",
    paddingHorizontal: '2%',
    marginTop: '15%',
    marginBottom: "4%",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    marginTop: 15
  },

  Text:
  {
    marginHorizontal: 5,
  },

  header: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,

  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#e3f2fd",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 160,
    height: 160,
    justifyContent: 'space-between',

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: "15%",
    width: "80%",
    marginHorizontal: "8%",
    marginTop: "10%",
    marginVertical: "5%"

  },
});
