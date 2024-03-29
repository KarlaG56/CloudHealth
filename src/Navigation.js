import React from "react";
import { Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Login
import Login from "./pages/Login";
import ChooseLogin from './pages/ChooseLogin';
import CodePatient from "./pages/Patient/CodePatient";

//Control Admin 
import RegistroDepartment from "./pages/Admin/Empleados/RegistroDepartment";
import MenuAdminstrativo from "./pages/Admin/Empleados/MenuAdministrativo";
import ListDoc from "./pages/Admin/Empleados/ListDoctor";
import ListNurse from "./pages/Admin/Empleados/ListNurse";
import ListAdmin from "./pages/Admin/Empleados/ListAdmin";
import ListDepa from "./pages/Admin/Empleados/ListDepartment";

// Espacios de admin
import MenuEspacios from "./pages/Admin/Espacios/MenuEspacios";
import Areas from "./pages/Admin/Espacios/Areas";
import Settings from "./pages/Settings";
import Room from "./pages/Admin/Espacios/Room";
import Bed from "./pages/Admin/Espacios/Bed";

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00B7BF', 
                tabBarStyle: {
                    display: 'flex' 
                }
            }}
        >
            <Tab.Screen
                name="Espacios"
                component={MenuEspacios}
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
            
        </Tab.Navigator>
    );
}

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="ChooseLogin"
        >
            <Stack.Screen name='ChooseLogin' component={ChooseLogin} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

            <Stack.Screen name='CodePatient' component={CodePatient} options={{ headerShown: false }} />

            <Stack.Screen name='RegistroDepartment' component={RegistroDepartment} options={{ headerShown: false }} />
            <Stack.Screen name='MenuAdminstrativo' component={MenuAdminstrativo} options={{ headerShown: false }} />
            <Stack.Screen name='Inicio' component={MainTab} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Doctores' component={ListDoc} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Enfermeras' component={ListNurse} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Administradores' component={ListAdmin} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Departamentos' component={ListDepa} options={{ tabBarVisible: false }} />

            <Stack.Screen name='Areas' component={Areas} />
            <Stack.Screen name='Habitaciones' component={Room} />
            <Stack.Screen name='Camas' component={Bed} />
           
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
