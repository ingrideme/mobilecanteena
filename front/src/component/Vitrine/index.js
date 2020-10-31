import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native';
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Bebidas from "../../component/Produtos/bebidas";
import Salgados from "../../component/Produtos/salgados";
import Doces from "../../component/Produtos/doces";
import { ScrollView } from "react-native-gesture-handler";
import api from '../../services/api'


export default function Vitrine({ navigation }) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function ListaEstoque() {
            await api.get('/produtos')
            .then((response) => setProdutos(response.data))
            .catch(erro => console.log(erro))
        }
        ListaEstoque()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {produtos.map((item) => (
                <View key={item._id}>
                    <Text>{item.nome_produto}</Text>
                </View>
            ))}
            {/* <SafeAreaView style={{ height: "7%", backgroundColor: 'blue', marginTop: "6%" }} />
            <View>
                <ScrollView>
                <View style={{ height: "25%", marginBottom: -65, marginTop: 25 }}>
                    <Bebidas />
                </View>
                <View style={{ height: "25%", marginTop: "9%" }}>
                    <Salgados />
                </View>
                <View style={{ height: "25%", marginTop: "-5%" }} >
                <Doces />
            </View>
                </ScrollView>

            

            </View>
            <View style={{ height: "30%", marginBottom: 0, marginTop: "-45%", }}>
                <Text>Valor total R$</Text>
                <Text>Quantidade de itens :  </Text>
                <Button title="fechar pedido" />
            </View> */}

        </View>
    );
}