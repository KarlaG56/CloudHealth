import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import Btn from "../../../components/PrimaryButton";

const CantRoom = ({ route }) => {
    const { area_uuid } = route.params;
    const navigation = useNavigation();
    const [inputStart, setInputStart] = useState('');
    const [inputEnd, setInputEnd] = useState('');
    

    const handleInputStartChange = (text) => {
        setInputStart(text);
        console.log(text);
    };

    const handleInputEndChange = (text) => {
        setInputEnd(text);
        console.log(text);
    };

    const handlePress = () =>{
        if(!inputStart.trim()){
            Alert.alert('Validacion', 'Por favor, ingrese el inicio de las habitaciones')
        }
        if(!inputEnd.trim()){
            Alert.alert('Validacion', 'Por favor, ingrese el final de las habitaciones')
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ inicio: parseInt(inputStart, 10), cantidad: parseInt(inputEnd, 10), area: area_uuid })
        };
        fetch('http://192.168.189.218:5000/habitaciones/', requestOptions)
        .then(Response => Response.json())
        .then(data =>{
            if (data.status == 'Success'){
                Alert.alert('Éxito', 'Habitaciones agregagas correctamente.');
                console.log(data);
            }
            else{
                Alert.alert('Error', 'No se pudieron agregar las habitaciones');
                console.log(data.message)
            }
        })
    }


    return (
        <View style={styles.container}>
            <View>
                <MaterialIcons name="meeting-room" size={130} color="#00DAE4"  />
            </View>

            <View style={styles.containerTxt}>
                <Text style={styles.Title}>Ingrese rango de habitaciones</Text>
            </View>

            <View style={styles.containerTxt}>
                <View style={styles.containerRange}>
                    <TextInput
                        onChangeText={handleInputStartChange}
                        placeholder='0'
                        style={styles.input}
                        value={inputStart}
                    />
                    <View style={styles.txt}>
                        <Text>Al</Text>
                    </View>
                    <TextInput
                        onChangeText={handleInputEndChange}
                        placeholder='100'
                        style={styles.input}
                        value={inputEnd}
                    />
                </View>
            </View>

            <Btn title={'Ingresa'} onPress={handlePress}/>
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
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'5%'
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        width: '30%',
        height: 60,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        margin:'10%',
        textAlign: 'center',
    },
    containerInput: {
        width: '80%',
        height: '15%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerRange: {
        width: '80%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default CantRoom;
