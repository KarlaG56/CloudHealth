import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import BtnPry from '../../../components/PrimaryButton';
import InputComponent from "../../../components/Input";

const RegisterPiso = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
        console.log(text);
    };

    const handleSubmit = () => {
        // Verificar que el inputValue no esté vacío
        if (!inputValue.trim()) {
            Alert.alert('Validación', 'Por favor, ingrese el nombre del piso.', inputValue);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ level: inputValue }),
        };

        fetch('http://192.168.189.218:5000/floors/', requestOptions)
            .then(response => response.json())
            .then(data => {
                Alert.alert('Éxito', 'Piso registrado correctamente.');
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Error', 'Hubo un problema al registrar el piso.');
            });
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerInf}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Registro</Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text>Nombre</Text>
                    <InputComponent
                        value={inputValue}
                        onChangeText={handleInputChange} />
                </View>


                <BtnPry title={'Registrar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white'
    },
    containerTxt: {
        width: '80%',
        height: '15%',
        alignItems: 'right',
        justifyContent: 'center',
    },
    containerInf: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitle: {
        marginBottom: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default RegisterPiso;
