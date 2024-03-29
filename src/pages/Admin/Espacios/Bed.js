import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/AddButton"; 
const Bed = () => {
    const navigation = useNavigation();
    const [camas, setCamas] = useState(['Cama #1', 'Cama #2', 'Cama #3']); 
    const irACama = (cama) => {
        console.log(`Navegar a ${cama}`);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>Registrar cama</Text>
                <Button onPress={() => console.log('Registrar nueva cama')} /> 
            </View>

            <Text style={styles.subtitle}>Listado de Camas</Text>
            {camas.map((cama, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => irACama(cama)}>
                    <Text style={styles.camaButtonText}>{cama}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        height: 65,
        marginBottom: 10
    },
    camaButtonText: {
        fontSize: 16,
    },
});

export default Bed;
