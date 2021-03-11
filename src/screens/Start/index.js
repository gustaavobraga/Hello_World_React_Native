import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../../components/button'
import styles from './styles'

export default function Start() {

    function enviaInfo() {
        alert('Clicou no botão')
    }

    return (
        <View style = {styles.container}>
            <Button>Localização</Button>
            <Button>?</Button>
            <Button>?</Button>
            <Button>?</Button>
            <Button>?</Button>
            <Button>?</Button>
            
            
        </View>
    );
}

