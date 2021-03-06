import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconLangganan, IconBooking, IconJoinTeam } from '../../assets'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const Layanan = ({ title, active, onPress }) => {

    const Icon = () => {
        if (title === "Paket Langganan") return <IconLangganan />
        if (title === "Booking Lapangan") return <IconBooking />
        if (title === "JoinTeam") return <IconJoinTeam />
        return <IconJoinTeam />

    }
    return (
        <TouchableOpacity style={styles.container(active)} onPress={onPress}>
            <View style={styles.icon}>
                <Icon />
                <Text style={styles.text(active)}>{title.replace(' ', '\n')}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Layanan

const styles = StyleSheet.create({
    container: active => ({
        alignItems: 'center',
        backgroundColor: active ? WARNA_UTAMA : '#FFF',
        borderRadius: 10,
        padding: 10,
        borderColor: active ? WARNA_UTAMA : WARNA_SEKUNDER,
        borderWidth: 2,
    }),
    text: active => ({
        fontFamily: 'Poppins-Bold',
        color: active ? 'white' : WARNA_SEKUNDER,
        fontSize: 14,
        textAlign: 'center'
    }),
    icon: {
        marginTop: -30
    }
})
