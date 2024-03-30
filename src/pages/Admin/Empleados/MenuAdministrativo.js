import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AddButton from "../../../components/AddButton";
import Button from "../../../components/Button";

const MenuAdminstrativo = () => {
    const navigation = useNavigation();
   

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={styles.subtitle}>Registrar nuevo empleado</Text>
                <AddButton 
                onPress={() => navigation.navigate('Registro de Empleado')} 
                />
            </View>
            <Text style={styles.subtitle}>Control Administrativo</Text>

            <Button title={'Doctores'} onPress={() => navigation.navigate('Doctores')} />

            <Button title={'Enfermeras'} onPress={() => navigation.navigate('Enfermeras')} />

            <Button title={'Administradores'}  onPress={() => navigation.navigate('Administradores')}/>

            <Button title={'Departamentos'} onPress={() => navigation.navigate('Departamentos')} />

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
});

export default MenuAdminstrativo;
