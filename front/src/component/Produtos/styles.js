import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollhor: {
        paddingVertical: "2%",
        paddingHorizontal: '2%',
        marginTop: '3%',
        marginBottom: "4%",
    },
    flat:{
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        marginTop: 22,
        width:100,
        height:100,
        marginVertical:8
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
        width:160,
        height:160,
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
        justifyContent:'center',
        height:"40%",
        width:"80%",
        marginHorizontal:"8%"
       
    },
});
export default styles;