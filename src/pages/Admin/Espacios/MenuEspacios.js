import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/AddButton";

const MenuEspacios = () => {
    const navigation = useNavigation();
    const [pisos, setPisos] = useState([]);

    const fetchPisos = async () => {
        try {
            let response = await fetch('http://192.168.189.218:5000/floors/');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let json = await response.json();
            setPisos(json.pisos);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        setPisos([])
        fetchPisos();
    }, []);

    const agregarNuevoPiso = () => {
        const nuevoPiso = `Piso #${pisos.length + 1}`;
        setPisos([...pisos, nuevoPiso]);
    };

    return (
        <View style={styles.container}>
            
            
            <View>
                <Text style={styles.subtitle}>Registrar nuevo piso</Text>
                <Button
                    onPress={() => navigation.navigate('RePiso')}
                />
            </View>
            <Text style={styles.subtitle}>Listado de Pisos</Text>
            {pisos.map((piso, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => navigation.navigate('Areas', { uuid: piso.uuid })}
                >
                    <Text style={styles.pisoButtonText}>{piso.level}</Text>
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
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    editText: {
        fontSize: 18,
        marginTop: 20,
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
    pisoButtonText: {
        fontSize: 16,
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
});

export default MenuEspacios;
