import React from "react";
import { Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando los componentes de las páginas
import Login from "./pages/Login";
import ChooseLogin from './pages/ChooseLogin';
import CodePatient from "./pages/Patient/CodePatient";
import RegistroDepartment from "./pages/Admin/Empleados/RegistroDepartment";
import MenuAdminstrativo from "./pages/Admin/Empleados/MenuAdministrativo";
import RegisterEmployee from "./pages/Admin/Empleados/RegisterEmployee";
import ListDoc from "./pages/Admin/Empleados/ListDoctor";
import ListNurse from "./pages/Admin/Empleados/ListNurse";
import ListAdmin from "./pages/Admin/Empleados/ListAdmin";
import InfEmployee from "./pages/Admin/Empleados/Inf_employee";
import ListDepa from "./pages/Admin/Empleados/ListDepartment";
import CantRoom from "./pages/Admin/Espacios/CantRoom";
import CantBed from "./pages/Admin/Espacios/CantBed";
import MenuEspacios from "./pages/Admin/Espacios/MenuEspacios";
import RegisterPiso from "./pages/Admin/Espacios/RegisterPiso";
import RegisterArea from "./pages/Admin/Espacios/RegisterArea";
import Areas from "./pages/Admin/Espacios/Areas";
import Settings from "./pages/Settings";
import Room from "./pages/Admin/Espacios/Room";
import Bed from "./pages/Admin/Espacios/Bed";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Estilos para la tabBar
const styles = {
    tabBar: {
        backgroundColor: '#FFFFFF',
        borderTopColor: 'transparent',
    },
    tabBarItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
};

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="MenuEspacios">
            <Stack.Screen name='MenuEspacios' component={MenuEspacios} options={{ headerShown: false }} />
            <Stack.Screen name='ChooseLogin' component={ChooseLogin} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='CodePatient' component={CodePatient} options={{ headerShown: false }} />
            <Stack.Screen name='RegistroDepartment' component={RegistroDepartment} options={{ headerShown: false }} />
            <Stack.Screen name='Registro de Empleado' component={RegisterEmployee} />
            <Stack.Screen name='Doctores' component={ListDoc} options={{ tabBarVisible: false }} />
            <Stack.Screen name='Enfermeras' component={ListNurse} options={{ headerShown: false }} />
            <Stack.Screen name='Administradores' component={ListAdmin} />
            <Stack.Screen name='Informacion Empleado' component={InfEmployee}  />

            <Stack.Screen name='Departamentos' component={ListDepa} options={{ headerShown: false }} />
            <Stack.Screen name='RePiso' component={RegisterPiso} options={{ headerShown: false }} />
            <Stack.Screen name='Registro de Area' component={RegisterArea} />
            <Stack.Screen name='CantBed' component={CantBed} options={{ headerShown: false }} />
            <Stack.Screen name='Registro de Camas' component={CantRoom} options={{ headerShown: false }} />
            <Stack.Screen name='Areas' component={Areas} options={{ headerShown: false }} />
            <Stack.Screen name='Habitaciones' component={Room} options={{ headerShown: false }} />
            <Stack.Screen name='Camas' component={Bed} />
        </Stack.Navigator>
    );
}

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
            }}
        >
            <Tab.Screen
                name="Menu Espacios"
                component={MyStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="home" size={size} color={focused ? '#00B7BF' : color} />
                    ), headerShown: false

                }}
            />
            <Tab.Screen
                name="Administrativo"
                component={MenuAdminstrativo}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="users" size={size} color={focused ? '#00B7BF' : color} />
                    ),
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

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainTab />
        </NavigationContainer>
    );
}
