import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Button from "../components/Button";

const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.questions}>
                <Button title={'Ayuda'} />
                <Button title={'Términos y condiciones'} />
                <Button title={'Políticas de privacidad'} />
                <Button title={'Cerrar sesión'} />
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
        marginTop: 60
    }
});

export default Settings;
