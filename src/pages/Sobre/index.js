import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import local from '../../../'
export default function Sobre(){
    return (
        <View>
            <Text> Aqui estou eu!</Text>

            <Image 
            source={require('../../../assets/tiago.webp')}

            >

            </Image>
        </View>
    );
}

var styles = StyleSheet.create({

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }


});