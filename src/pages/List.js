import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Button from "../components/Button";

const List = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Lista de {title} </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((name, index) => (
                    <Button
                        key={index}
                        title={name}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

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
})

export default List;
