import React from "react";
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, TextInput } from "react-native";
import List from "../../Templates/ListTemplate";

const ListPatient = () => {
    const [searchText, setSearchText] = React.useState('');
    const data = [
        "Santiago",
        "Valentina",
        "Matías",
        "Isabella",
        "Sebastián",
        "Camila",
        "Gabriel",
        "Sofía",
        "Alejandro",
        "Valeria",
        "Leonardo",
        "Gabriela",
        "Daniel",];

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather name="search" size={24} color="#202020" />
                <TextInput
                    placeholder="Buscar"
                    style={styles.input}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
            <List
                title={'Pacientes'}
                searchText={searchText}
                data={data.filter(name =>
                    name.toLowerCase().includes(searchText.toLowerCase())
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    input: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#202020'
    },
    searchContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
    },
})

export default ListPatient;
