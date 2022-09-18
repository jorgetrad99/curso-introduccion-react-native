import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };
    return (
        <View>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage("Home")} title='Ir a Home' />
        </View>
    );
}

export default SettingsScreen;
