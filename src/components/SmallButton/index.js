import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constants'

const SmallButton = ({ text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SmallButton

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: WARNA_UTAMA,
        padding: 3,
        borderRadius: 5,
        height: 20
    },
    text: {
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
    }
})
