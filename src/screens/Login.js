import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GoogleSocialButton } from "react-native-social-buttons";
import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import { Button } from '../components/Button'

export function Login() {

    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate('PacienteHospital');

    }



    return (
        <View style={styles.container}>

            <View style={styles.positionLogo}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <View style={styles.positionBtn}>
                <Button
                    title='Login'
                    onPress={handleLogin}
                />
            </View>

            <View style={styles.positionBtnSocial}>
                <TouchableOpacity>
                    <Text style={styles.textLostPass}>Esquci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.positionBtnSocial}>
                <GoogleSocialButton onPress={() => { }} />
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

    },
    positionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    positionBtnSocial: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,        
    },
    textLostPass: {
        fontSize: 18,
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15

    },
    textCad: {
        fontSize: 18,
        fontFamily: fonts.heading,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        width: 211,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

/*





                 */