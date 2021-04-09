import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { HeaderInformation, Layanan, SmallButton, BoxClub, UpdateScore } from '../../components'
import { Banner } from '../../assets'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            layanan: 'booking'
        }
    }

    clickLayanan = (value) => {
        this.setState({
            layanan: value
        })
    }

    render() {
        return (
            <View style={styles.page}>
                <ScrollView>
                    <View style={styles.wrapperHeader}>
                        <HeaderInformation />
                        <Image source={Banner} style={styles.banner} />
                    </View>
                    <View style={styles.wrapperLabel}>
                        <Text style={styles.label}>Ayo <Text style={styles.textBold}>Barcelona FC</Text></Text>
                    </View>
                    <View style={styles.layanan}>
                        <Layanan
                            title="Paket Langganan"
                            onPress={() => this.clickLayanan('paket')}
                            active={this.state.layanan === 'paket' ? true : false} />
                        <Layanan
                            title="Booking Lapangan"
                            onPress={() => this.clickLayanan('booking')}
                            active={this.state.layanan === 'booking' ? true : false} />
                        <Layanan
                            title="Join Team"
                            onPress={() => this.clickLayanan('join')}
                            active={this.state.layanan === 'join' ? true : false} />
                    </View>
                    <View style={styles.labelSparring}>
                        <Text style={styles.label}>Pilih Tim <Text style={styles.textBold}>Sparring</Text> Kamu</Text>
                        <SmallButton text="Lihat Semua" />
                    </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode={'never'}>
                            <View style={styles.club}>
                                <BoxClub club="An-Nahl FA" statistic="WWWDDD" />
                                <BoxClub club="Vamos FC" statistic="WWWDDD" />
                                <BoxClub club="VE FC" statistic="WWWDDD" />
                                <BoxClub club="Bogor FC" statistic="WWWDDD" />
                                <View style={{ marginRight: -10 }}>
                                    <BoxClub club="Awang Long FA" statistic="WWWDDD" />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.labelSparring}>
                        <Text style={styles.label}>Update Score</Text>
                        <SmallButton text="Lihat Semua" />
                    </View>

                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode={'never'}>
                            <View style={styles.club}>
                                <UpdateScore
                                    club1="An-Nahl FA"
                                    club2="Vamos FC"
                                    score1="5"
                                    score2="2"
                                    date="Rabu, 1 Juli 2020 19.00 WIB"
                                />
                                <UpdateScore
                                    club1="VE FC"
                                    club2="Bogor FC"
                                    score1="3"
                                    score2="4"
                                    date="Kamis, 2 Juli 2020 21.00 WIB"
                                />
                                <UpdateScore
                                    club1="Vamos FC"
                                    club2="Bogor FC"
                                    score1="3"
                                    score2="4"
                                    date="Kamis, 2 Juli 2020 21.00 WIB"
                                />
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapperHeader: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    banner: {
        width: '100%',
        height: windowHeight * 0.125,
        marginTop: windowHeight * 0.016,
    },
    textBold: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
    },
    label: {
        fontFamily: 'Poppins-Light',
        fontSize: 18
    },
    wrapperLabel: {
        paddingHorizontal: 30,
        marginTop: 14,
    },
    layanan: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: windowHeight * 0.035,
    },
    labelSparring: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    club: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    wrapperScroll: {
        justifyContent: 'space-between',
        marginHorizontal: 30,
    }
})
