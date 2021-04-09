import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDefaultUser, IconNextJadwal } from '../../assets'

const HeaderInformation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <IconDefaultUser />
                <View style={styles.textWrapper}>
                    <Text style={styles.hello}>Hello Bro,</Text>
                    <Text style={styles.username}>Ray Tommy</Text>
                </View>
            </View>
            <View style={styles.jadwalInfo}>
                <View style={styles.timeWrapper}>
                    <Text style={styles.jam}>19.00 WIB</Text>
                    <Text style={styles.tanggal}>Sabtu, 01-08-2020</Text>
                </View>
                <View style={styles.iconJadwal}>
                    <IconNextJadwal />
                    <Text style={styles.nextJadwal}>Next Jadwal</Text>
                </View>
            </View>
        </View>
    )
}

export default HeaderInformation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textWrapper: {
        marginLeft: 9
    },
    jadwalInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hello: {
        fontSize: 13,
        fontFamily: 'Poppins-Light'
    },
    username: {
        fontSize: 13,
        fontFamily: 'Poppins-Bold'
    },
    waktu: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    jam: {
        fontSize: 11,
        fontFamily: 'Poppins-Bold',
        textAlign: 'right'
    },
    tanggal: {
        fontSize: 11,
        fontFamily: 'Poppins-Light'
    },
    timeWrapper: {
        marginRight: 3,
    },
    iconJadwal: {
        alignItems: 'center',
    },
    nextJadwal: {
        fontSize: 11,
        fontFamily: 'Poppins-Light'
    }
})
