import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal, } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';


import fonts from '../styles/fonts';
export function CamApp() {

    const camRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [captured, setCaptured] = useState(null);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        (async () => {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            setHasPermission(status === 'granted');
        })()
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCaptured(data.uri);
            setOpen(true)
            console.log(data)
        }
    }

    async function savePicture(){
        const asset = await MediaLibrary.createAssetAsync(captured)
        .then(()=>{
            alert('Salvo com sucesso!')

        })
        .catch(error => {
            console.log('err', error);
        })

    }
    return (

        <View style={styles.container}>
            <Camera
                style={{ flex: 1 }}
                type={type}
                ref={camRef}
            >
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>

                        <Text style={{ fontSize: 20, marginBottom: 13, color: '#fff' }}>Trocar</Text>

                    </TouchableOpacity>
                </View>
            </Camera>

            <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Icon name="camera" color="#fff" size={24} />
            </TouchableOpacity>

            { captured &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={open}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

                        <View style={{margin:10, flexDirection:'row'}}>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
                                <Icon name='window-close' size={50} color="#121212" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 10 }} onPress={ savePicture }>
                                <Icon name='upload' size={50} color="#121212" />
                            </TouchableOpacity>


                        </View>


                        <Image
                            style={{ width: '100%', height: 450, borderRadius: 20 }}
                            source={{ uri: captured }}
                        />

                    </View>


                </Modal>
            }


        </View>
    )
}

export default CamApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
        fontFamily: fonts.text,
        color: '#FFF'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10,
        height: 50

    },
    btn: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        marginBottom: 13

    }




})

/*
<View style={styles.dashAreaIcons}>
<Image
    style={styles.image}
    source={require('../assets/QRCode.png')}
    resizeMode='contain'
/>
</View>


  <Image
                            style={styles.imageLogin}
                            source={require('../assets/Ellipse.png')}
                            resizeMode='contain'
                        />
*/