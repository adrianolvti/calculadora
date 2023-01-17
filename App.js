import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Index as TraditionalCalculator } from './src/TraditionalCalculator/Index';
import { Index as AvarageCalculator } from './src/AverageCalculator/Index';

export default function App() {
  const [tradicionalCalculatorModal, setTradicionalCalculatorModal] = useState(false);
  const [averageCalculatorModal, setAveregeCalculatorModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora do Adriano</Text>
      <Text style={styles.subtitle}>Desenvolvimento para Dispositivos Móveis 2022/2</Text>

      <TouchableOpacity style={styles.button} onPress={ () => setTradicionalCalculatorModal(true) }>
        <Text style={styles.buttonText}>Calculadora Tradicional</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => setAveregeCalculatorModal(true) }>
        <Text style={styles.buttonText}>Calculadora de Média</Text>
      </TouchableOpacity>

      <Modal
        visible={tradicionalCalculatorModal}
        transparent={true}
        onRequestClose={ () => setTradicionalCalculatorModal(false) }
      > 
        <TraditionalCalculator 
          handleClose={ () => setTradicionalCalculatorModal(false) }
        />
      </Modal>

      <Modal
        visible={averageCalculatorModal}
        transparent={true}
        onRequestClose={ () => setAveregeCalculatorModal(false) }
      > 
        <AvarageCalculator 
          handleClose={ () => setAveregeCalculatorModal(false) }
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12131B',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  subtitle: {
    color: '#FFF',
    textAlign: 'center',
    paddingBottom: '10%'
  },
  button: {
    backgroundColor: '#3D0075',
    padding: 4,
    marginVertical: 8,
    widith: '70%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    display: 'flex',
    margin: '10%'
  },
  buttonText: {
    color: '#FFF',
  }
});
