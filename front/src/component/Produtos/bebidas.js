import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Bebidas() {
    const vbebidas = [
        { id: 1, nome: 'Fanta Uva', valor: 3.50, quantidade: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpVxlQkRd2i5nGFkEjVmwBQVRXtwACMmzJnw0WAsI28qTcrNEyu6ySv7pkTyY&usqp=CAc" },
        { id: 2, nome: 'Pepsi', valor: 3.00, quantidade: 180, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs5V-Dwn27dA3H7dPeO9WuYgl9fyTP5Hl3sQ&usqp=CAU" },
        { id: 3, nome: 'Fanta Laranja', valor: 3.50, quantidade: 190, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqrrAaahDqKrGdifu3fCcTRxI57E-GvBqX229t6jhUKC_PZVUF2L_yKUJLjSINqaZd1tYWNFo&usqp=CAc" },
        { id: 4, nome: 'Coca Cola', valor: 4.00, quantidade: 255, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAmmk3hEZ6j7DMVymcZ1KuaMaiLJINAu275A&usqp=CAU" },
        { id: 5, nome: 'Guaraná Antartica', valor: 2.68, quantidade: 102, img: "https://images.rappi.com.br/products/BR-94629-2098660461.png?d=128x90" },
    ]


    const [modalVisible, setModalVisible] = useState(false);
    const [quantidade, setQuantidade] = useState(0);
    const [total, setTotal] = useState(0);

    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }
    function add(valor) {
        setQuantidade(quantidade + 1);

        if (quantidade >= 1) {
            setTotal((valor) * (quantidade));
        }
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
        <FlatList horizontal={true}
            data={vbebidas}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.openButton}  >

                    <View>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: item.img }} />
                        <View>
                            <Text>{item.nome}</Text>
                            <Text>Valor :R$ {item.valor.toFixed(2)}</Text>
                            <Text>Disponíveis : {item.quantidade}</Text>
                        </View>
                        <View style={styles.botoesModal}>
                        <TouchableOpacity style={{
                            width: "45%", height: "45%", backgroundColor: "#d50000", borderRadius: 25, justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        // onPress={}//uma modal precisa estar dentro da view,
                        >
                            <Text style={styles.textStyle}>-</Text>
                        </TouchableOpacity>


                       
                        <TouchableOpacity style={{
                            width: "45%", height: "45%", backgroundColor: "#2196F3", borderRadius: 25, justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={() => { add }}
                        //uma modal precisa estar dentro da view,
                        >
                            <Text style={styles.textStyle}>+</Text>
                        </TouchableOpacity>

                    </View>
                    </View>
                </TouchableOpacity>
            )
            }
            keyExtractor={item => item.id}
        />
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Informações qualquer</Text>
                    
                    <View>
                    <Text>Quantidade : </Text>
                    <Text>total: {total}</Text>
                </View>
                </View>
                
            </Modal>


        </View>


    </View>
    )
}
