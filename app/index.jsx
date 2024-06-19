import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, Text, Button, View, ScrollView } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [email, SetEmail] = useState("");
  const [nome, SetNome] = useState("");
  const [mensagem, SetMensagem] = useState("");

  const sendEmailContato = async () => {
    const dados = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };

    axios.post(
      'http://localhost:5000/send-email-contato',
      dados
    )
      .then(function (response) {
        console.log(response);
        alert("Email enviado com Sucesso");
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Bem-Vindo</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={SetNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={SetEmail}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          value={mensagem}
          onChangeText={SetMensagem}
          placeholder="Mensagem"
          multiline
        />
        <Button onPress={sendEmailContato} title="Enviar E-mail" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#A1CEDC',
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});
