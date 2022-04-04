import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native'

import DateTime from '../../components/DateTime';


export default function CriarNota() {

    const navigation = useNavigation();

    function voltar() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.txtCriarNota}>Criar nota</Text>
                    <TouchableOpacity onPress={voltar}>
                        <Image
                            source={require('../../assets/btnClose.png')}
                            style={styles.btnClose}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#EFEFEF' }}>
                    <Text style={styles.txtTitulo}>Nota da nota (obrigatório)</Text>

                    <TextInput
                        style={styles.inputNoteName}
                        placeholder="Insira"></TextInput>

                    <Text style={styles.txtTitulo}>Descrição</Text>
                    <TextInput
                        style={styles.inputNoteDescription}
                        placeholder="Insira"
                        multiline
                        numberOfLines={5}></TextInput>

                    <Text style={styles.txtTitulo}>Prioridade</Text>
                    <Picker style={styles.pickerPriority}>
                        <Picker.Item key={1} value={1} label={'Insira'} enabled={false} />
                        <Picker.Item key={2} value={2} label={'Urgente'} />
                        <Picker.Item key={3} value={3} label={'Alta'} />
                        <Picker.Item key={4} value={4} label={'Média'} />
                        <Picker.Item key={5} value={5} label={'Baixa'} />
                    </Picker>

                    <Text style={styles.txtTitulo}>Data</Text>
                   <DateTime />

                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 72,
        backgroundColor: '#0F62FE',
        flexDirection: 'row',
    },
    txtCriarNota: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 32,
        color: '#FFFFFF',
        marginTop: 25,
        marginLeft: 16,
    },
    btnClose: {
        width: 60,
        height: 60,
        marginLeft: 190,
        marginTop: 20,
        display: 'flex',
    },
    txtTitulo: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        color: '#161616',
        marginTop: 20,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    inputNoteName: {
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 20,
        padding: 10,
    },
    inputNoteDescription: {
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
    },
    pickerPriority: {
        backgroundColor: '#FFF',
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        color: '#161616',
        marginTop: 20,
        marginRight: 16,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    pickerDate: {
        width: 100,
        height: 100,
    },
});

