import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

class App extends Component {
    render() {

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.textNotas}>
                        Notas
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={require('./assets/ButtonSearch.png')}
                            style={styles.imgSearch}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('./assets/ButtonAdd.png')}
                            style={styles.imgAdd}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('./assets/NoNotesMainPage.png')}
                        style={styles.imgNoNotes}
                    />
                </View>
                <View>
                    <Text style={styles.txtNoNotes}>
                        Não tem nenhuma nota aqui
                    </Text>
                    <Text style={styles.txtNotesHere}>
                        Crie notas e você poderá vê-las aqui.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('./assets/ButtonAdd.png')}
                            style={styles.imgAddBotton}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 415,
        height: 132,
        backgroundColor: '#0F62FE',
        flexDirection: 'row'
    },
    textNotas: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 32,
        color: '#FFFFFF',
        marginTop: 73,
        marginLeft: 16
    },
    imgSearch: {
        width: 25,
        height: 25,
        marginLeft: 220,
        marginTop: 90,
        display: 'flex'
    },
    imgAdd: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginTop: 83,
        display: 'flex'
    },
    imgNoNotes: {
        width: 91,
        height: 128,
        marginLeft: -380,
        marginTop: 180,
        display: 'flex'
    },
    txtNoNotes: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 20,
        color: '#161616',
        marginTop: 200,
        marginLeft: 16
    },
    txtNotesHere: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 14,
        color: '#8D8D8D',
        marginLeft: 16
    },
    imgAddBotton: {
        width: 40,
        height: 40,
        marginLeft: 360,
        marginTop: 205,
        display: 'flex'
    }
})

export default App;
