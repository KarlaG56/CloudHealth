import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const Button = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
            <MaterialIcons name="add-box" size={55} color="#019EA5" />
            <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default Button;
