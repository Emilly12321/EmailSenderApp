import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import axios from 'axios';

export default function SenhamodificadaScreen() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");


    const sendEmailSenhamodi = async () => {
        const dados = {
            email: email,
        };

        axios.post(
            'http://localhost:5000/send-email-senha-modificada',
            dados,
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
            <Text style={styles.subtitle}>Modificação de Senha</Text>
            <View>
                <TextInput 
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Coloque seu Nome"
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Coloque seu E-mail"
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Button onPress={sendEmailSenhamodi} title="Enviar E-mail" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
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
