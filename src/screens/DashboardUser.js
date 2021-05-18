import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api'

export function DashboardUser() {


    const navigation = useNavigation();

    function handleQr() {
        navigation.navigate('Qr');

    }

    async function getData() {
        try {
            const response = await api.get('/users/',
                {
                    "email": "12345678@mail.com.br",
                    
                })

        } catch (err) {
            console.log(err)
        }
    }

    return (

        <View style={styles.container}>

            <View style={styles.dashboard}>
                <View>
                    <TouchableOpacity>
                        <Image
                            style={styles.image}
                            source={require('../assets/Ellipse.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={styles.dashLegenda}>Bem vindo User!!</Text>
                </View>

            </View>

            <View style={styles.dashBack}>

                <View style={styles.dashArea}>

                    <View style={styles.dashAreaIcons}>

                        <TouchableOpacity onPress={getData}>
                            <Image
                                style={styles.image}
                                source={require('../assets/card.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.dashAreaIcons}>

                        <TouchableOpacity onPress={handleQr}>
                            <Image
                                style={styles.image}
                                source={require('../assets/QRCode.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>

    )
}

export default DashboardUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    dashboard: {
        justifyContent: 'center',
        backgroundColor: '#1877F2',
        height: 350,
        alignItems: 'center',

    },
    imageLogin: {
        width: 150,
        height: 150,
        marginTop: 60

    },
    dashLegenda: {
        fontSize: 18,
        marginTop: 40,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: fonts.heading,
        color: '#fff',
    },
    dashBack: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 480,

    },
    dashArea: {
        backgroundColor: '#EDEAEA',
        margin: 10,
        height: 450,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashAreaIcons: {
        width: 226,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 10

    },


})
