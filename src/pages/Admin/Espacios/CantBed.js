import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import Btn from "../../../components/PrimaryButton";
import { FontAwesome5 } from '@expo/vector-icons';

const CantRoom = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <FontAwesome5 name="bed" size={130}color="#00DAE4" />
            </View>

            <View style={styles.containerTxt}>
                <Text style={styles.Title}>Ingrese cantidad de camas</Text>
            </View>


            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su texto aquí"
                    onChangeText={setText}
                    value={text}
                />
            </View>

            <Btn title={'Ingresa'} />
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
        marginTop:20
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center' ,
    },
    input: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
     
    },
    containerInput: {
        width: '80%',
        height: '15%',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CantRoom;
