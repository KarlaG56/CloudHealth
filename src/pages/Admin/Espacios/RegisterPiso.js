import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BtnPry from '../../../components/PrimaryButton';
import InputComponent from "../../../components/Input";

const RegisterPiso = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>

            <View style={styles.containerInf}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Registro</Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text>Nombre</Text>
                    <InputComponent onInputChange={handleInputChange} />
                </View>

                <View style={styles.containerTxt}>
                    <Text>Numero del Piso</Text>
                    <InputComponent onInputChange={handleInputChange} />
                </View>

            
                <BtnPry  title={'Registrar'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor:'white'
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
