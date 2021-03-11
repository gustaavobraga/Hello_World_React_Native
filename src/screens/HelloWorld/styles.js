import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        backgroundColor: '#44475a'
    },

    image: {
        width: '75%',
        height: 350,
        borderRadius: 20
    },

    button: {
        backgroundColor: '#ffb86c',
        borderRadius: 20,
        padding:10,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    text: {
        fontSize: 25,
        color: '#6272a4',
        fontWeight: 'bold'
        
    },

});

export default styles