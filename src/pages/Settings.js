import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>

            <View style={styles.questions}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ayuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Términos y condiciones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Políticas de privacidad</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    questions: {
        marginTop:60
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
    buttonText: {
        fontSize: 15,
    }
})

export default Settings;