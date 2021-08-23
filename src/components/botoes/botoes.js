import React from 'react';
import {
  Text,
  TouchableHighlight, 
} from 'react-native';

import Estilos from './styles'

export default props=>{

    const estilosBotoes=[Estilos.btn]

    if(props.duplo){
        estilosBotoes.push(Estilos.btnDuplo)
    }
    if(props.igual){
        estilosBotoes.push(Estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(Estilos.btnOp)
    }
    if(props.ac){
        estilosBotoes.push(Estilos.btnAc)
    }
    if(props.bs){
        estilosBotoes.push(Estilos.btnBs)
    }


    return(
        <TouchableHighlight
        onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}