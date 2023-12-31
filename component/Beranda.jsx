import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Beranda = () => {
    const navigation = useNavigation();
    const [dataQuran, setDataQuran] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://quran-api.santrikoding.com/api/surah');
            const data = await response.json();
            setDataQuran(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {dataQuran?.map((data, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('Detail', { surahNumber: data.nomor })}
                        style={styles.ayatContainer}
                    >
                        <View style={styles.ayatContent}>
                            <View style={styles.nomorContainer}>
                                <ImageBackground style={styles.nomorBackground} source={require('../src/img/bingkai.png')} // Replace with the actual path to your image style={styles.nomorBackground}
                                    resizeMode="cover"
                                    borderRadius={20}>
                                    <Text style={styles.nomorText}>{data.nomor}</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.ayatText}>{data.nama}</Text>
                                <Text style={styles.namaLatinText}>{data.nama_latin}</Text>
                                <Text style={styles.tempatTurun}>{data.tempat_turun} | {data.jumlah_ayat} ayat</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        padding: 15,
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    ayatContainer: {
        backgroundColor: '#34495e',
        borderRadius: 10,
        marginVertical: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    ayatContent: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    nomorContainer: {
        overflow: 'hidden', // To ensure the border-radius works with the ImageBackground
        borderRadius: 8,
        marginVertical: 4,
        padding: 10,
    },
    nomorText: {
        fontSize: 14,
        color: '#ecf0f1',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'flex-start', // Align text at the top
    },
    ayatText: {
        fontSize: 22,
        color: '#ecf0f1',
        fontWeight: 'bold',
    },
    namaLatinText: {
        fontSize: 18,
        color: '#ecf0f1',
        marginTop: -30,
    },
    tempatTurun: {
        fontSize: 16,
        color: '#95a5a6',
        marginTop: 4,
    },
    jumlahAyat: {
        fontSize: 16,
        color: '#95a5a6',
        marginTop: 4,
    },
    nomorBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },

});

export default Beranda;
