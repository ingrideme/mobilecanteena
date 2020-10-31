import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Routes from './src/routes';


export default function App() {

  // o nome atribuido será usado futuramente para navegar entre as as telas, será inserido em  onPress={() => navigation.navigate('nomedatela)
  return (
    <>
      <StatusBar style="auto" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}











