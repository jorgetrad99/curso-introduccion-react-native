import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar name='Jorge Trad' />
      <Saludar name='Carlos de Granda' />
      <Saludar name='Olivia Lopez' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
