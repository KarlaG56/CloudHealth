import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Button from "../components/TertiaryButton";

const List = ({ title, data, onPressCallback }) => {
    const handlePress = (name) => {
        onPressCallback(name);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Lista de {title} </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((name, index) => (
                    <TouchableOpacity   key={index} >
                        <Button onPress={() => handlePress(name)} title={name} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
        marginBottom: 10,
        fontWeight: 'bold',
    },
    
});

export default List;
