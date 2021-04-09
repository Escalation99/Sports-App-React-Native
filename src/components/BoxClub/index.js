import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { LogoAnnahl, LogoAwanglongfa, LogoBogor, LogoVamos, LogoVefc, LogoVictorycome } from '../../assets'
import { SmallButton } from '../../components'
import { WARNA_SEKUNDER } from '../../utils/constants'

const BoxClub = ({ club, statistic }) => {

    const Logo = () => {
        if (club === "An-Nahl FA")
            return <Image source={LogoAnnahl} style={styles.logo} />;
        if (club === "Vamos FC")
            return <Image source={LogoVamos} style={styles.logo} />;
        if (club === "VE FC")
            return <Image source={LogoVefc} style={styles.logo} />;
        if (club === "Awang Long FA")
            return <Image source={LogoAwanglongfa} style={styles.logo} />;
        if (club === "Bogor FC")
            return <Image source={LogoBogor} style={styles.logo} />;
        return <Image source={LogoBogor} style={styles.logo} />;

    };

    return (
        <TouchableOpacity style={styles.container}>
            <Logo />
            <Text style={styles.text}>{club}</Text>
            <View style={styles.statistic}>
                <SmallButton text={statistic} />
            </View>
        </TouchableOpacity>
    )
}

export default BoxClub

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: WARNA_SEKUNDER
    },
    logo: {
        width: 52,
        height: 52
    },
    text: {
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
    },
    statistic: {
        position: 'absolute',
        bottom: -10,
    }
})
