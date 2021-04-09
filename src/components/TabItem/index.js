import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA, WARNA_SEKUNDER } from '../../utils/constants'
import { IconHome, IconAkun, IconJadwal, IconHomeActive, IconAkunActive, IconJadwalActive } from '../../assets'

const TabItem = ({ label, isFocused, onLongPress, onPress }) => {

    const Icon = () => {
        if (label === 'Home') {
            return isFocused ? <IconHomeActive /> : <IconHome />
        }

        if (label === 'Jadwal') {
            return isFocused ? <IconJadwalActive /> : <IconJadwal />
        }

        if (label === 'Akun') {
            return isFocused ? <IconAkunActive /> : <IconAkun />
        }
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.containerFocus : styles.container}
        >
            <Icon />
            {isFocused && <Text style={styles.text}>
                {label.toUpperCase()}
            </Text>}
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5,
    },
    text: {
        color: WARNA_UTAMA,
        fontSize: 18,
        marginLeft: 8,
        fontFamily: 'Poppins-Bold'
    },
    containerFocus: {
        alignContent: 'center',
        padding: 5,
        backgroundColor: WARNA_SEKUNDER,
        flexDirection: 'row',
        borderRadius: 10,
    }
})
