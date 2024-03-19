import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const Areas = () => {
    const navigation = useNavigation();
    const [pisos, setPisos] = useState(['Piso #1', 'Piso #2', 'Piso #3']);

    const agregarNuevoPiso = () => {
        const nuevoPiso = `Piso #${pisos.length + 1}`;
        setPisos([...pisos, nuevoPiso]);
    };

    const irAPiso = (piso) => {
    };

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.subtitle}>Registrar area</Text>

                <TouchableOpacity style={styles.addButton} onPress={agregarNuevoPiso}>
                <MaterialIcons name="add-box" size={55} color="#019EA5" />                    
                <Text style={styles.addButtonText}>Agregar</Text>
                </TouchableOpacity>
            </View>




            <Text style={styles.subtitle}>Listado de Areas</Text>
            {pisos.map((piso, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => irAPiso(piso)}>
                    <Text style={styles.pisoButtonText}>{piso}</Text>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop:20,

    },
    subtitle: {
        fontSize: 18,
        marginTop:20,
        fontWeight: 'bold',
    },
    editText: {
        fontSize: 18,
        marginTop:20,
        color: 'blue',
    },
    ContainerHabitaciones: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        marginHorizontal: 10,
        marginTop: 20,
        padding: 10,
        height: 65,
        width: 180,
        marginBottom: 20
    },
    Habitacionestext: {
        color: '#535461'
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    addButtonText: {
        fontSize: 18,
        marginLeft: 10,
        color: '#006D72',
    },

    pisoButtonText: {
        fontSize: 16,
    },
    moreButton: {
        alignItems: 'center',
        padding: 10,
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
    // Puedes agregar o ajustar estilos adicionales según sea necesario
});

export default Areas;