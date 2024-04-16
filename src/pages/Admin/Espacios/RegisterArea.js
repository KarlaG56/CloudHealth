import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert} from "react-native";
import BtnPry from '../../../components/PrimaryButton';
import InputComponent from "../../../components/Input";

const RegisterArea = ({route}) => {
    const {floor_uuid} = route.params;
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () =>{
        if (!inputValue.trim()) {
            Alert.alert('Validación', 'Por favor, ingrese el nombre del piso.', inputValue);
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: inputValue, floor_uuid: floor_uuid }),
        };
        fetch('http://192.168.189.218:5000/areas/', requestOptions)
            .then(response => response.json())
            .then(data => {
                Alert.alert('Éxito', 'Piso registrado correctamente.');
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Error', 'Hubo un problema al registrar el piso.');
            });
    }

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
                    <InputComponent onChangeText={handleInputChange} value={inputValue}/>
                </View>
                
                <BtnPry title={'Registrar'} onPress={handleSubmit}/>
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
