import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Estilos from './styles'

export default props=>{
    return(
        <View style={Estilos.display}>
            <Text
                style={Estilos.txtDspOp}
                numberOfLines={1}
            >{props.valor}
                </Text>

            <Text
                style={Estilos.txtRes}
                numberOfLines={1}
            >{props.res}
                </Text>
            </View>
    )
}