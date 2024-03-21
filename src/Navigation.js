import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather, AntDesign } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Espacios de admin
import MenuEspacios from "./pages/Admin/Espacios/MenuEspacios";
import Areas from "./pages/Admin/Espacios/Areas";
import Settings from "./pages/Settings";
import Room from "./pages/Admin/Espacios/Room";
import Bed from "./pages/Admin/Espacios/Bed";


function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Inicio' component={MenuEspacios} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Areas' component={Areas} />
            <Stack.Screen name='Habitaciones' component={Room} />
            <Stack.Screen name='Camas' component={Bed} />

        </Stack.Navigator>
    )
}

function MyTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00B7BF', // Color del ícono cuando está seleccionado
                tabBarStyle: {
                    display: 'flex' // Estilo personalizado para la barra de pestañas
                }
            }}
        >
            <Tab.Screen
                name="Espacios"
                component={MyStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="home" size={size} color={focused ? '#00B7BF' : color} />
                    ),
                    headerShown: false

                }}
            />

            <Tab.Screen
                name="Configuración"
                component={Settings}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign name="setting" size={size} color={focused ? '#00B7BF' : color} />
                    ),
                }}
            />
            {/* No incluir Tab.Screen para "Configuración" si no deseas que esté presente */}
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}
