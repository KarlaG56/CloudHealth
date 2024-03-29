import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Btn from '../../components/PrimaryButton'
import { useNavigation } from "@react-navigation/native";

const CodePatient = () => {
    const navigation = useNavigation();

    

    return (
        <View style={styles.container}>
            <View>
            </View>

            <View style={styles.containerTxt} >
                <Text style={styles.Title} >Ingresa codigo</Text>
            </View>

            <View style={styles.containerInf}>
                <View>
                    <Text style={styles.Txt}>Abre las puertas hacia una vida más saludable y descubre el apoyo que podemos ofrecerte en el camino.</Text>
                </View>

            </View>

            <Btn title={'Ingresa'} onPress={() => navigation.navigate('Inicio')} />
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

})

export default CodePatient;
