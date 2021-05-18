import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'

import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import api from '../services/api'

export function LoginUser() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function handleSignin() {
        try {
            const response = await api.post('/auth/',
                {
                    "email": email,
                    "password": pass
                })

            const { user, token } = response.data;

            await AsyncStorage.multiSet([
                ['@codeApi:token', token],
                ['@codeApi:user', JSON.stringify(user)],
            ])

        } catch (err) {
            console.log(err)
        }


    }



    return (
        <View style={styles.container}>

            <View style={styles.positionLogo}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

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
                    title='Login'
                    onPress={handleSignin}

                />
            </View >

            <View style={styles.positionBtnSocial}>
                <TouchableOpacity>
                    <Text style={styles.textCad}>Esquci minha senha</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.positionBtnSocial}>
                <TouchableOpacity>
                    <Text style={styles.textCad}>Não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    positionLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 254,
        height: 156,
        marginBottom: 70

    },
    positionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    positionBtnSocial: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
    textCad: {
        fontFamily: fonts.text,
        fontSize: 15
    }

})

