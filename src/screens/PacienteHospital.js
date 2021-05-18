import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GoogleSocialButton } from "react-native-social-buttons";
import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import { Button } from '../components/Button'

export function PacienteHospital() {

    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate('LoginUser');

    }''



    return (
        <View style={styles.container}>

            <View style={styles.positionLogo}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <View style={styles.positionBtnPaciente}>
                <Button
                    title='Paciente'
                    onPress={handleLogin}
                />
            </View>

            <View style={styles.positionBtnHospital}>
                <Button
                    title='Hospital'
                    onPress={handleLogin}
                />
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
    positionBtnPaciente: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    positionBtnHospital: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})

/*





                 */