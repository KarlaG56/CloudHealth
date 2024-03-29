import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import Btn from '../../components/PrimaryButton';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CodePatient = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <MaterialCommunityIcons name="clipboard-text-search-outline" size={130} color="#00DAE4" />
            </View>

            <View style={styles.containerTxt}>
                <Text style={styles.Title}>Ingresa código</Text>
            </View>

            <View style={styles.containerInf}>
                <View style={styles.containerPhrase}>
                    <Text style={styles.Txt}>Abre las puertas hacia una vida más saludable y descubre el apoyo que podemos ofrecerte en el camino.</Text>
                </View>
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
    },
    containerInf: {
        width: '90%',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Txt: {
        textAlign: 'center' ,
        color:'#838383'
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    },
    containerPhrase: {
        width: '95%'
    },
    containerInput: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default CodePatient;
