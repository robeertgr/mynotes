import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class App extends Component {
    render() {

        

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.txtCriarNota}>
                        Criar nota
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={require('./assets/ButtonClose.png')}
                            style={styles.btnClose}
                        />
                    </TouchableOpacity>
                </View >
                
                <View style={{backgroundColor: '#EFEFEF'}}>
                    <Text style={styles.txtNomeNota}>
                        Nota da nota (obrigatório)
                    </Text>

                    <TextInput style={styles.inputNoteName} placeholder='Insira'></TextInput>

                    <Text style={styles.txtNomeNota}>
                        Descrição
                    </Text>
                    <TextInput style={styles.inputNoteDescription} placeholder='Insira' multiline numberOfLines={5}></TextInput>

                    <Text style={styles.txtNomeNota}>
                        Prioridade
                    </Text>
                    <Picker style={styles.pickerPriority} placeholder='Escolha'>
                        <Picker.Item key={1} value={1} label={"Urgente"}/>
                        <Picker.Item key={2} value={2} label={"Alta"} />
                        <Picker.Item key={3} value={3} label={"Média"} />
                        <Picker.Item key={4} value={4} label={"Baixa"} />
                    </Picker>
                        
                    
                </View> 
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 72,
        backgroundColor: '#0F62FE',
        flexDirection: 'row'
    },
    txtCriarNota: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 32,
        color: '#FFFFFF',
        marginTop: 25,
        marginLeft: 16
    },
    btnClose: {
        width: 60,
        height: 60,
        marginLeft: 190,
        marginTop: 70,
        display: 'flex'
    },
    txtNomeNota:{
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        color: '#161616',
        marginTop: 20,
        marginLeft: 16,
        fontWeight: 'bold'
    },
    inputNoteName:{
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 20,
        padding: 10
    },
    inputNoteDescription:{
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10 
    },
    pickerPriority: {
        backgroundColor: '#FFF',
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        color: '#161616',
        marginTop: 20,
        marginRight: 16,
        marginLeft: 16,
        fontWeight: 'bold'
    }
})

export default App;