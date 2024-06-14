import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen
          name="Filmes"
          component={FilmesScreen}
          options={{ title: 'App de Filmes' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Detalhes do Filme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const FilmesScreen = ({ navigation }) => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const carregarFilmes = async () => {
      try {
        const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes');
        const data = await response.json();
        setFilmes(data);
      } catch (error) {
        console.error('Erro ao carregar os filmes:', error);
      }
    };

    carregarFilmes();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detalhes', { filme: item })}
    >
      <Image style={styles.itemImage} source={{ uri: item.foto }} />
      <Text style={styles.itemTitle}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const DetalhesScreen = ({ route }) => {
  const { filme } = route.params;

  return (
    <View style={styles.detalhesContainer}>
      <Image style={styles.detalhesImage} source={{ uri: filme.foto }} />
      <Text style={styles.detalhesTitulo}>{filme.nome}</Text>
      <Text style={styles.detalhesSinopse}>{filme.sinopse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 18,
  },
  detalhesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  detalhesImage: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  detalhesTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detalhesSinopse: {
    textAlign: 'justify',
  },
});

export default App;
