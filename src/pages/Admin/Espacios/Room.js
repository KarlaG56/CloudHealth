import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Room = ({ route }) => {
    const { area_uuid } = route.params;
    const navigation = useNavigation();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`https://surveys.zapto.org/api/room/listar/` + area_uuid);
                let json = await response.json();
                setRooms(json);
            } catch (error) {
                console.error(error);
            }
        }

        if (area_uuid) {
            fetchData();
        }
    }, [area_uuid]);

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Listado de habitaciones</Text>
            {rooms.map((room, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => navigation.navigate('Camas')}
                >
                    <Text style={styles.roomButtonText}>{room.number}</Text>
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
    roomButtonText: {
        fontSize: 16,
    },
});

export default Room;