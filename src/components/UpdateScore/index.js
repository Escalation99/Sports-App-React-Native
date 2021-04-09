import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { LogoAnnahl, LogoAwanglongfa, LogoBogor, LogoVamos, LogoVefc, LogoVictorycome } from '../../assets'
import { SmallButton } from '../../components'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'

const UpdateScore = ({ club1, club2, score1, score2, date }) => {

    const Logo = (club) => {
        if (club.club === "An-Nahl FA")
            return <Image source={LogoAnnahl} style={styles.logo} />;
        if (club.club === "Vamos FC")
            return <Image source={LogoVamos} style={styles.logo} />;
        if (club.club === "VE FC")
            return <Image source={LogoVefc} style={styles.logo} />;
        if (club.club === "Awang Long FA")
            return <Image source={LogoAwanglongfa} style={styles.logo} />;
        if (club.club === "Bogor FC")
            return <Image source={LogoBogor} style={styles.logo} />;
        return <Image source={LogoBogor} style={styles.logo} />;

    };

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.match}>
                <View style={styles.containerTim}>
                    <Logo club={club1} />
                    <Text style={styles.text}>{club1}</Text>
                </View>
                <View style={styles.score}>
                    <Text style={styles.textScore}>
                        {score1} : {score2}
                    </Text>
                </View>
                <View style={styles.containerTim}>
                    <Logo club={club2} />
                    <Text style={styles.text}>{club2}</Text>
                </View>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UpdateScore

const styles = StyleSheet.create({
    containerTim: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: WARNA_SEKUNDER,
        width: 85,
        height: 85,
    },
    container: {
        alignItems: 'center',
        marginRight: 10,
    },
    logo: {
        width: 52,
        height: 52
    },
    text: {
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
        color: 'black'
    },
    match: {
        flexDirection: 'row'
    },
    textScore: {
        color: WARNA_UTAMA,
        fontSize: 10,
        fontFamily: 'Poppins-Bold'
    },
    score: {
        height: 21,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        paddingHorizontal: 2,
        position: 'relative',
        zIndex: 1,
        marginHorizontal: -16,
    },
    date: {
        alignItems: 'center',
        marginTop: 8,
    },
    dateText: {
        fontSize: 10,
        fontFamily: 'Poppins-Light',
    }
})
