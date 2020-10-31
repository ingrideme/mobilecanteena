import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Carrinho from '../component/Carrinho';
import Perfil from '../pages/Perfil';
import Cadastro from '../pages/Cadastro';
import Vitrine from '../component/Vitrine';

const Stack = createStackNavigator();

// o nome atribuido será usado futuramente para navegar entre as as telas, será inserido em  onPress={() => navigation.navigate('nomedatela)

export default function Routes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Vitrine">
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
          <Stack.Screen name="Vitrine" component={Vitrine} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
