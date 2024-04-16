import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../../components/Input'
import Button from '../../../components/PrimaryButton';
import Btn from '../../../components/FourButton'



const Inf_employee = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);



    const handleChangeEmail = (text) => {
        setEmail(text);
        console.log(text);
    };

    const handleChangePass = (text) => {
        setPassword(text);
        console.log(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.formData}>
                <View style={styles.card} >
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Nombre: </Text>
                        <Text style={styles.description}>Luisa</Text>

                        <Text style={styles.title}> Apellido</Text>
                        <Text style={styles.description}> Perez</Text>

                        <Text style={styles.title}> Correo electrónico</Text>
                        <Text style={styles.description}> rararar@gmail.com</Text>

                    </View>
                </View>
                <View style={styles.data}>
                    <Text style={styles.title2}>Actualizar</Text>
                    <View>
                        <Text >Correo electrónico</Text>
                        <Input
                            onChangeText={handleChangeEmail}
                            value={email}
                        />
                    </View>

                    <View>
                        <Text >Contraseña</Text>
                        <Input
                            onChangeText={handleChangePass}
                            value={password}
                        />
                    </View>
                </View>


                <Button title='Actualizar' />

            </View>
            <Btn title='Eliminar empleado' />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: '100%'
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContent: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    title2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'

    },
    description: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,

    },
    formData: {
        width: '100%',
        alignItems: 'center',

    },
    data: {
        marginTop: 20,
        width: '100%'
    }
});

export default Inf_employee;
