import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Btn from '../components/PrimaryButton';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import InputComponent from '../components/Input';

const Login = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <View>
                <FontAwesome5 name="hospital-user" size={130} color="#00DAE4" />
            </View>

            <View style={styles.containerTxt} >
                <Text style={styles.Title} >Iniciar sesión</Text>
            </View>

            <View style={styles.containerInf}>
                <View>
                    <Text style={styles.Txt}>Correo electrónico</Text>
                    <InputComponent
                        placeholderText="Ingrese su correo electrónico"
                        onInputChange={handleInputChange}
                    />
                </View>

                <View style={styles.Txt}>
                    <Text>Contraseña</Text>
                    <InputComponent
                        placeholderText="Ingrese su contraseña"
                        onInputChange={handleInputChange}
                    />
                </View>
            </View>
            <Btn title={'Ingresar'} onPress={() => navigation.navigate('CantBed')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerTxt: {
        width: '80%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInf: {
        backgroundColor: 'transparent',
        width: '80%',
        marginBottom: 30
    },
    Txt: {
        marginTop: 10
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default Login;
