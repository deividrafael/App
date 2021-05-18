import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: fonts.complement

    },
    button: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        borderColor: '#1E90FF',
        height: 50,
        backgroundColor: '#1E90FF',
        paddingHorizontal: 10
    }


})




