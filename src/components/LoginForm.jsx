import React from 'react';
import { TextInput, Button, Text, View } from "react-native";

const LoginForm = () => {
    return (
        <View>
            <TextInput placeholder='Email' />
            <TextInput placeholder='Password' />
            <Button
                title='Send'
                onPress={() => console.log('Sent')}
            />
        </View>

    )
}

export default LoginForm;