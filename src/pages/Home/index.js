import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function Home(  {navigation}){
    return (
        <View>
            <Text> Seja bem vindo ao aplicativo de Tiago César da Silva Lopes! 💓</Text>
            <Text>Aluno do 3ª período de ADS no Senac - Embarque digital</Text>
            <Button
            title="Conhecer o Tiago"
            onPress={ () => navigation.navigate('Sobre')}
            />
        </View>
    );
}