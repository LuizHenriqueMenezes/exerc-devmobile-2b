import React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import styles from './styles';


const jobs = [
  {
     id: '1',
    title: 'Chaveiro',
    details: 'Vaga para chaveiro com experiência em confecção e duplicação de chaves.',
    image: 'https://chiptronic.com.br/blog/wp-content/uploads/2017/06/chaveiro-%C3%A9-uma-boa-profiss%C3%A3o.jpg',
    contact: '555-123-4567',
    email: 'chaveiro@example.com',
    description: 'Realizar serviços de chaveiro, incluindo a abertura de portas e cofres, confecção e duplicação de chaves residenciais, comerciais e automotivas. Atendimento a emergências 24 horas.',
  },
  {
     id: '2',
    title: 'Enfermeiro',
    details: 'Vaga para enfermeiro com experiência em cuidados hospitalares.',
    image: 'https://i1.wp.com/www.kdcare.com.br/wp-content/uploads/2018/10/Quais-s%C3%A3o-as-atribui%C3%A7%C3%B5es-do-enfermeiro-home-care.jpg?w=1000&ssl=1',
    contact: '999-888-7777',
    email: 'enfermeiro@example.com',
    description: 'Prestar assistência direta ao paciente, administrar medicamentos e realizar procedimentos de enfermagem. Trabalhar em equipe multidisciplinar para garantir a recuperação e o bem-estar dos pacientes.',

  },
];

const JobList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Button
        title="Saiba mais"
        onPress={() => navigation.navigate('JobDetails', { job: item })}
      />
    </View>
  );

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

export default JobList;
