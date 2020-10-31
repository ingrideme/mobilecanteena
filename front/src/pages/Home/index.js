import * as React from 'react';
import { Image, View, Button, SafeAreaView, Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { geral, medidas } from '../../styles';
import styles from './styles'



export default function Home({ navigation }) {
  return (

    <SafeAreaView style={styles.container} >

      <View style={geral.header}>
        <Image source={require('../../img/iconehome.png')} />
        <Text style={geral.text} >Bem vindo a Canteena</Text>
      </View>
      
      <View style={geral.telalogin} >
        <TextInput placeholder="Digite seu CPF" />
        <TextInput  secureTextEntry={true} placeholder="Digite sua senha" />
        <Button title='Carrinho' onPress={() => navigation.navigate('Carrinho')} />
        <Button title='Perfil' onPress={() => navigation.navigate('Perfil')} />
      </View>

      <View style={styles.fixToText}>
        <Button title="Vitrine" onPress={() => navigation.navigate('Vitrine')} />
      </View>
    </SafeAreaView>
  );
}

