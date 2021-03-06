import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles'

const Button = ({ children }) => (
    <TouchableOpacity style = {styles.container} >

        <Text style = {styles.text}> {children} </Text>

    </TouchableOpacity>
)

export default Button;