import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#000', 
        color:'#fff',
        textAlign: 'center'
    },

    btnIgual:{
        color: '#0f0',
    }, 

    btnOp: {
        color: '#FF8000',
    },

    btnAc:{
        color: '#f00'
    },

    btnBs:{
        color: "#f00"
    },

    btnDuplo: {
        width: (Dimensions.get('window').width/4)*2,
    }
})