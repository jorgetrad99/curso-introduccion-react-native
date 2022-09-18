import React from 'react';

import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
    console.log(props)
    const { navigation } = props

    const goToSettings = () => {
        navigation.navigate("Settings")
    };
    return (
        <View>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Text>Estamos en el HomeScreen</Text>
            <Button onPress={goToSettings} title='Ir a Ajustes' />
        </View>
    );
};

export default HomeScreen;