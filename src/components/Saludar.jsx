import React from "react";
import { Text, View } from "react-native";

const Saludar = ({
    firstName,
    lastName
}) => {
    return <Text>Hola, {firstName} {lastName}</Text>
}

Saludar.defaultProps = {
    firstName: "Agustín",
    lastName: "Navarro Galdon"
}

export default Saludar;
