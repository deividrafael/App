import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Text, Platform, Dimensions, Alert } from 'react-native';


import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import api from '../services/api'



export function UserData() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [data, setData] = useState('');

    async function loadData() {
        try {
            const response = await api.get('/api/users/609c23a93d9b823ce480ea7f')
            .then(response => {
                setData(response.data)
              })

              this.setState({ filmes: response.data });
        
    } catch (err) {
        console.log(err)
    }

    useEffect(() => {
        loadData();
    
        if(!isConnected)
          setRedirect(true); 
    
      }, [filterActived, loadData])

    
}



return (

    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.form}>

                <Text style={styles.tittle}> Aqui estão seus dados </Text>

                
              

                <Button
                    title='Atualizar dados'
                    onPress={loadData}
                />



            </View>


        </View>

    </SafeAreaView>


)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    form: {
        resizeMode: 'center',
        ...Platform.select({
            ios: {
                height: Dimensions.get('window').width * 0.7,

            },
            android: {
                height: Dimensions.get('window').width * 0.7,

            },
            default: {
                height: '100%',
                width: '100%',
            }
        })

    },
    tittle: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'left',
        fontFamily: fonts.heading,
        lineHeight: 36
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
        width: '80%',
        fontSize: 18,
        textAlign: 'center',

    }
})