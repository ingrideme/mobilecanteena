import React, { useState } from 'react';
import { View, Text, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Doces() {
    const vdoces = [
        { id: 11, nome: 'Bala', valor: 0.5, quantidade: 1024, img: "https://images.vexels.com/media/users/3/152046/isolated/lists/85695cafa4b8d7604260c93663808f6e-icone-de-doces-embrulhados.png" },
       /* { id: 12, nome: 'Chiclete', valor: 0.15, quantidade: 352, img: "https://images.rappi.com.br/products/2092815412-1562018300.png?d=136x136" },
        { id: 13, nome: 'Pirulito', valor: 0.25, quantidade: 512, img: "https://images.vexels.com/media/users/3/200447/isolated/lists/7651aace85b73f44836662d6190ac9eb-cor-de-pirulito-de-carnaval.png" },
        { id: 14, nome: 'Chocolate barra', valor: 1.25, quantidade: 256, img: "https://images.rappi.com.br/products/2092815470-1562018339.png?d=200x200&e=webp" },
        { id: 15, nome: 'Bombom', valor: 0.75, quantidade: 128, img: "https://images.rappi.com.br/products/2094042258-1585595140573.png?d=200x200&e=webp" },
   
    */    ]


    const [quantidade, setQuantidade] = useState(80);
    const total = vdoces.map(t => t.quantidade * t.valor)
    // const valor = ({valor})=> valor >=0
    //const quantidade =  vdoces.map(t => t.quantidade)

    function filtrodescricao(descricao) {
        if (descricao.length < 27) {
            return descricao;
        }

        return `${descricao.substring(0, 24)}...`;
    }
    function add() {
        setQuantidade( quantidade + 1);
     
    
    
      }
    /*
        function remove() {
    
            if (quantidade <= 0) {
                setQuantidade(quantidade)
            } else {
                setQuantidade(quantidade - 1);
    
            }
        }
    */


    return (
        <View>
            <FlatList horizontal={true}
                data={vdoces}
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



        </View>
    )
}
