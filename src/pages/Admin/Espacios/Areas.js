import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/AddButton"; 

const Areas = ({ route }) => {
    const { uuid } = route.params;
    const navigation = useNavigation();
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`http://192.168.189.218:5000/areas/piso/` + uuid);
                let json = await response.json();
                setAreas(json.areas);
            } catch (error) {
                console.error(error);
            }
        }

        if (uuid) {
            fetchData();
        }
    }, [uuid]);

    const irAArea = (area) => {
        console.log(`Navegar a ${area}`);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>Registrar área</Text>
                <Button onPress={() => navigation.navigate('Registro de Area', {floor_uuid: uuid})} /> 
            </View>

            <Text style={styles.subtitle}>Listado de Áreas</Text>
            {areas.map((area, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate('Habitaciones', { area_uuid: area.uuid })}>
                    <Text style={styles.areaButtonText}>{area.name}</Text>
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
    areaButtonText: {
        fontSize: 16,
    },
});

export default Areas;