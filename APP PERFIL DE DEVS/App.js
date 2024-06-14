import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [name, setName] = useState('');
  const [devs, setDevs] = useState({});

  const consultaName = async (name) => {
    const response = await api.get(name);
    setDevs(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PERFIL DE DEVS</Text>

      <Image style={styles.foto} source={{ uri: devs.avatar_url }} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.cep}
          value={name}
          onChangeText={(texto) => setName(texto)}
        />

        <Button title="✔" color="red" onPress={() => consultaName(name)} />
      </View>

      <Text style={styles.dev}>ID: {devs.id}</Text>
      <Text style={styles.dev}>{devs.login}</Text>
      <Text style={styles.dev}>Repositórios: {devs.public_repos}</Text>
      <Text style={styles.dev}>Criado em: {devs.created_at}</Text>
      <Text style={styles.dev}>Seguindo: {devs.following}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  dev: {
    marginTop: 10,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cep: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
    borderRadius: 20,
  },
  titulo: {
    marginBottom: 20,
    fontSize: 30,
    color: 'red'
  },
  foto: {
    borderRadius: 100,
    width: 200,
    height: 200,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 2 
  },
});
