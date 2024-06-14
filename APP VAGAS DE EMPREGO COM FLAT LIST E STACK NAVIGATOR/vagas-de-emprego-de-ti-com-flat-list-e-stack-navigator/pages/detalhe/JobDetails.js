import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const JobDetails = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: job.image }} style={styles.image} />
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.details}>{job.details}</Text>
      <Text style={styles.contact}>Contato: {job.contact}</Text>
      <Text style={styles.email}>Email: {job.email}</Text>
      <Text style={styles.description}>Descrição: {job.description}</Text>
    </View>
  );
};

export default JobDetails;
