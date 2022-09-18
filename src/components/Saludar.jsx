import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

const Saludar = ({
    firstName,
    lastName
}) => {
    return <Text>Hola, {firstName} {lastName}</Text>
}

Saludar.defaultProps = {
    firstName: "Agustín",
    lastName: "Navarro Galdon",
}

Saludar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default Saludar;
