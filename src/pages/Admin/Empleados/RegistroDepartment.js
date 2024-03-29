import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Btn_primary from '../../../components/PrimaryButton';
import Btn_second from '../../../components/SecondaryButton';
import { useNavigation } from "@react-navigation/native";


const RegistroDepartment = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTxt}>
                <Text style={styles.title}>Registro de departamentos</Text>
            </View>

            <View style={styles.containerImg}>
                <Image style={styles.img} source={require('../../../assets/department.png')} />
            </View>

            <Btn_primary title={'Agregar'} onPress={() => navigation.navigate('')} />
            <Btn_second title={'Acceder al menu principal'} onPress={() => navigation.navigate('MenuAdminstrativo') } />
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
    containerTxt: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImg: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00DAE4',
    }
})

export default RegistroDepartment;
