import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

export default function HomeScreen() {
  const navigation = useNavigation(); // Acesse a navegação

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

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
        alert("Email enviado com Sucesso")
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      </View>
      <Text style={styles.subtitle}>Bem-Vindo</Text>
      <View>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Mensagem"
          multiline
        />
      </View>
      <View>
        <Button onPress={sendEmailContato} title="Enviar E-mail" />
      </View>
      <View>
        <Button
          title="Recuperacao"
          onPress={() => navigation.navigate('Recuperacao')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
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
