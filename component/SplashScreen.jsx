import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {

        const timeout = setTimeout(() => {

            navigation.replace('Home');
        }, 2000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../src/img/logo.png')} />
            <Text style={styles.text}>MyQuran</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'arial',
    }
});

export default SplashScreen;
