import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, Text, Button, View } from 'react-native';
import axios from 'axios';

export default function RecuperacaoScreen() {
    const [email, setEmail] = useState("");

    const sendEmailRecuperacao = async () => {
        const dados = {
            email: email,
        };

        axios.post(
            'http://localhost:5000/send-email-recuperar-senha',
            dados
        )
        .then(function (response) {
            console.log(response);
            alert("Email enviado com Sucesso")
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Recuperação de Senha</Text>
            <View>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Coloque seu E-mail"
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Button onPress={sendEmailRecuperacao} title="Enviar E-mail" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});
