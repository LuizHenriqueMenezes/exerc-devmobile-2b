import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobList from './pages/lista/JobList';
import JobDetails from './pages/detalhe/JobDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobList">
        <Stack.Screen name="JobList" component={JobList} options={{ title: 'Vagas de TI' }} />
        <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Detalhes da Vaga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
