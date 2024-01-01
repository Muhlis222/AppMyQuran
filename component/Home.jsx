import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../src/img/bg4.png')} // Set the path to your background image
            style={{ flex: 1, padding: 15, alignItems: 'center' }}
        >
            <View style={{
                width: '100%',
                padding: 75,
                alignItems: 'center',
            }}>
                <Image style={{
                    width: 130,
                    height: 130,
                    resizeMode: 'contain',
                    marginTop: 80,
                    marginBottom: 10,
                }} source={require('../src/img/logo.png')} />
                <Text style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 60,
                    borderColor: '#000000',
                    marginBottom: 23,
                    paddingTop: 15,
                    paddingBottom: 10,
                    color: '#000000'
                }} onPress={() => navigation.navigate('Beranda')}>Baca Al-Quran</Text>
                <Text style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 60,
                    borderColor: '#000000',
                    marginBottom: 20,
                    paddingTop: 15,
                    paddingBottom: 10,
                    color: '#000000'
                }}>Kumpulan Doa</Text>
            </View>
        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({});
