import React from 'react'
import { View } from 'react-native'

import estilo from './styles/styleCores'
import { Azul, Basico, Rosa, VerdeAgua } from './components/CoresNotas'


export default () => (
    <View>
        <Basico />
        <Rosa style={estilo.Rosa}/>
        <Azul />
        <VerdeAgua />
    </View>
)
