import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component {
    render(){

        return (
            <View>
                <View style={{width: 415, height: 132, backgroundColor: '#0F62FE', flexDirection: 'row' }}>
                    <Text style={{fontFamily: 'IBM Plex Sans', fontSize: 32, color: '#FFFFFF', marginTop: 73, marginLeft: 16}}>
                        Notas
                    </Text>
                    <Image 
                        source={require('./assets/ButtonSearch.png')} 
                        style={{width: 25, height: 25, marginLeft: 220, marginTop: 90, display: 'flex'}}
                    />
                    <Image 
                        source={require('./assets/ButtonAdd.png')} 
                        style={{width: 40, height: 40, marginLeft: 10, marginTop: 83, display: 'flex'}}
                    />

                    <Image 
                        source={require('./assets/NoNotesMainPage.png')}
                        style={{width: 91, height: 128, marginLeft: -380, marginTop: 180, display: 'flex'}}
                    />

                </View>
                <View>
                    <Text style={{fontFamily: 'IBM Plex Sans', fontSize: 20, color: '#161616', marginTop: 200, marginLeft: 16}}>
                        Não tem nenhuma nota aqui
                    </Text>
                    <Text style={{fontFamily: 'IBM Plex Sans', fontSize: 14, color: '#8D8D8D', marginLeft: 16}}>
                        Crie notas e você poderá vê-las aqui.
                    </Text>
                </View>
                <View>
                <Image 
                        source={require('./assets/ButtonAdd.png')}
                        style={{width: 40, height: 40, marginLeft: 360, marginTop: 205, display: 'flex'}}
                    />
                </View>
            </View>
        )
    }

}

export default App;
