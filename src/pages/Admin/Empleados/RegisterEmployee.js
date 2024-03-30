import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from '../../../components/Input';
import Btn from "../../../components/PrimaryButton";
import DateInput from '../../../components/Date';
import SelectInput from '../../../components/SelectInput';

const RegisterEmployee = () => {
    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);

    const handleInputChange = (text) => {
        setInputValue(text);
        console.log(text);
    };

    // Definición de arreglos para departamentos y áreas
    const departments = ['IT', 'Ventas', 'Recursos Humanos', 'Marketing'];
    const areas = ['Desarrollo', 'Soporte', 'Administración', 'Publicidad'];

    return (
        <View style={styles.container}>
           

            <ScrollView contentContainerStyle={styles.containerInf} showsVerticalScrollIndicator={false}>
                
                <View style={styles.Txt}>
                    <Text>Nombre</Text>
                    <InputComponent
                        onInputChange={handleInputChange}
                    />
                </View>
                <View style={styles.Txt}>
                    <Text>Fecha de nacimiento</Text>
                    <DateInput
                        onInputChange={handleInputChange}
                    />
                </View>
                <View style={styles.Txt}>
                    <Text>Edad</Text>
                    <InputComponent
                        onInputChange={handleInputChange}
                    />
                </View>
                <View style={styles.Txt}>
                    <Text>Correo electrónico</Text>
                    <InputComponent
                        onInputChange={handleInputChange}
                    />
                </View>
                <View style={styles.Txt}>
                    <Text>Contraseña</Text>
                    <InputComponent
                        onInputChange={handleInputChange}
                    />
                </View>
                
                <View style={styles.Txt}>
                    <Text>Departamento</Text>
                    <SelectInput
                        label="Selecciona"
                        items={departments}
                        value={selectedDepartment}
                        onValueChange={(value) => setSelectedDepartment(value)}
                    />
                </View>

                <View style={styles.Txt}>
                    <Text>Area</Text>
                    <SelectInput
                        label="Selecciona"
                        items={areas}
                        value={selectedArea}
                        onValueChange={(value) => setSelectedArea(value)}
                    />
                </View>
            </ScrollView>

            <Btn title={'Registrar'} />
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
        width: '80%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInf: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        width: '100%',
        height:800
    },
    Txt: {
        marginTop: 30
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default RegisterEmployee;
