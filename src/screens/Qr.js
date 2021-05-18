import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import DashboardUser from './DashboardUser';

export function Qr() {

    
    const navigation = useNavigation();

    function handleDash() {
        navigation.navigate('Dash');

    }

    const [inputText, setInputText] = useState('');
    const [qrValue, setQrValue] = useState('');

    return (

        <View style={styles.container}>

            <View style={styles.areaQr}>
                <QRCode
                    value={qrValue ? qrValue : 'NA'}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                    logoBackgroundColor="yellow"
                />

            </View>

            <TextInput
                style={styles.textInput}
                onChangeText={(inputText) => setInputText(inputText)}
                value={inputText}
            />

            <View style={{ margin: 5 }}>
                <Button
                    onPress={() => setQrValue(inputText)}
                    title="Gerar QR Code"
                />
            </View>

            <View style={styles.button}>

                <Button onPress={handleDash}
                    title='Voltar'
                />
            </View>


        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    areaQr: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: 350,
        height: 375,
        //backgroundColor: 'red',
        margin: 20,
        marginTop: 10


    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 10

    },
    textInput: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        margin: 10,
        borderWidth: 1,
      },




})
