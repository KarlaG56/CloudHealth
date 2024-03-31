import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import BtnPry from '../../../components/PrimaryButton';
import InputComponent from "../../../components/Input";

const RegisterArea = () => {
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
                    <Text>Rango de habitaciones</Text>
                    <View style={styles.containerRange}>
                        <TextInput
                            onInputChange={handleInputChange}
                            style={styles.input}
                        />
                        <View style={styles.txt}>
                            <Text >Al</Text>

                        </View>
                        <TextInput
                            onInputChange={handleInputChange}
                            style={styles.input}
                        />
                    </View>

                </View>


                <BtnPry title={'Registrar'} />
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
        marginBottom:5
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
    },
    input: {
        width: '20%',
        height: 45,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#EBEBEB',
        marginTop: 10,
        marginRight: 10,

    },
    containerRange: {
        width: '80%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center'
    },
    txt: {
        width: '20%',
        height: 45,
        paddingHorizontal: 10,
        marginTop: 10,
        marginRight: 10,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default RegisterArea;
