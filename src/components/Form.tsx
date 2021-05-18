import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

import fonts from '../styles/fonts';


// import { Container } from './styles';

export function Form() {
    return (
        <View>
            <View>
                <Text style={styles.tittle}> Cadastre se</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Digite email'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                />

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    tittle: {
        fontSize: 32,
        marginTop: 80,
        textAlign: 'center',
        fontFamily: fonts.heading,
        lineHeight: 36
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    formText: {
        fontSize: 32,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 36
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20

    }    
})

