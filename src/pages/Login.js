import React from "react";
import { Text, View, Image } from 'react-native'; // Añadir Image desde react-native

const Login = () => {
    return (
        <View>
            <View>
                <Image width={20} height={30} source={require('.././assets/medicine.png')} />
            </View>

            <View>
                <Text>Elige cómo iniciar sesión:</Text>
                <Text>Da el primer paso hacia el cuidado de la salud y comencemos esta jornada juntos hacia el bienestar.</Text>
            </View>
        </View>
    )
}

export default Login;
