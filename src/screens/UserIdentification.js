import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Text, Platform, Dimensions, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import api from '../services/api'



export function UserIdentification() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function sendCred() {
        try {
            const response = await api.post('/users/',
                {
                    "email": email,
                    "password": pass
                })

        } catch (err) {
            console.log(err)
        }
    }

    return (

        <SafeAreaView style={styles.container}>



            <Text style={styles.tittle}> Cadastre se</Text>

            <View style={styles.form}>
                <Icon name="envelope" size={20} color='#1877F2' />
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={setEmail}
                > </TextInput>

            </View>


            <View style={styles.form}>
                <Icon name="lock" size={28} color='#1877F2' />
                <TextInput
                    style={{ paddingHorizontal: 10 }}
                    onChangeText={setPass}
                > </TextInput>

            </View>

            <View style={styles.positionBtn}>
                <Button
                    title='Confirmar'
                    onPress={sendCred}

                />
            </View >

        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        resizeMode: 'center',
        ...Platform.select({
            ios: {
                height: Dimensions.get('window').width * 0.7,

            },
            android: {
                height: Dimensions.get('window').width * 0.5,

            },
            default: {
                height: '100%',
                width: '100%',
            }
        })

    },
    tittle: {
        fontSize: 32,
        marginTop: 80,
        textAlign: 'center',
        fontFamily: fonts.heading,
        lineHeight: 36
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
        fontSize: 18,
        textAlign: 'center',

    },
    form: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 40,
        borderWidth: 1,
        marginTop: 15,
        marginVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderColor: '#1877F2',
        paddingVertical: 2

    },
    positionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
})