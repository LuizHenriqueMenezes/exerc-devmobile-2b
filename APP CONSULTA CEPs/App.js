import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CEP x ENDEREÇO</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.cep}
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
        />
        <Button title="✔" color='blue' onPress={() => consultaCep(cep)} />
      </View>

      <Text style={styles.endereco}>{endereco.cep}</Text>
      <Text style={styles.endereco}>{endereco.logradouro}</Text>
      <Text style={styles.endereco}>{endereco.bairro}</Text>
      <Text style={styles.endereco}>{endereco.localidade}</Text>
      <Text style={styles.endereco}>{endereco.uf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  endereco: {
    marginTop: 15,
    fontSize: 20,
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
    borderRadius: 20
  },
  titulo:{
    marginBottom: 20, 
    fontSize: 30,
    color: 'blue'
  }
});
