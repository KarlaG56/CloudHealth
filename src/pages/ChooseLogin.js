import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Button from "../components/PrimaryButton";
import Btn from "../components/SecondaryButton";

const ChooseLogin = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image style={styles.img} source={require('.././assets/medicine.png')} />
            </View>

            <View style={styles.containertex}>
                <Text style={styles.txtTitle}>Elige cómo iniciar sesión:</Text>
                <View style={styles.containerDescrip}>
                    <Text style={styles.descrip}>Da el primer paso hacia el cuidado de la salud y comencemos esta jornada juntos hacia el bienestar.</Text>
                </View>
            </View>

            <Button title="Paciente" onPress={() => navigation.navigate('CodePatient')}  />
            <Btn title="Otro" onPress={() => navigation.navigate('Registro de Piso')} />

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
    containerImg: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    containertex: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 0
    },
    txtTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20
    },
    containerDescrip: {
        width: '90%',
        justifyContent: 'center',
    },
    descrip: {
        textAlign: 'center',
        fontSize: 15,
        color: '#838383'

    }

})

export default ChooseLogin;
