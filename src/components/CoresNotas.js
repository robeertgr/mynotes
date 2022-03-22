import React from 'react'
import { Text } from 'react-native'
import Estilo from '../styles/styleCores'

function Basico() {
    return <Text style={Estilo.Basico}>Básico</Text>
}

function Rosa() {
    return <Text style={Estilo.Rosa}>Rosa</Text>
}

function Azul() {
    return <Text style={Estilo.Azul}>Azul</Text>
}

function VerdeAgua() {
    return <Text style={Estilo.VerdeAgua}>Verde-água</Text>
}

export { Basico, Rosa, Azul, VerdeAgua }