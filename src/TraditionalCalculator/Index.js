import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export function Index({ handleClose }) {

  const buttons = ['AC', 'DEL', 7, 8, 9, '÷', 4, 5, 6, 'x', 1, 2, 3, '-', '.', 0, '=', '+',];
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  function calculator() {
    const splitNumber = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumber[0]);
    const lastNumber = parseFloat(splitNumber[2]);
    const operator = splitNumber[1];

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        return;
      case 'x':
        setCurrentNumber((firstNumber * lastNumber).toString());
        return;
      case '÷':
        setCurrentNumber((firstNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    if (
      buttonPressed === '÷' ||
      buttonPressed === 'x' ||
      buttonPressed === '-' ||
      buttonPressed === '+') {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'AC':
        setCurrentNumber("");
        setLastNumber("");
        return;
      case '=':
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleClose}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.inputContainer}>
        {buttons.map((button) =>
          button === 'AC' || button === 'DEL' ?
            <TouchableOpacity
              key={button}
              onPress={() => handleInput(button)}
              style={[styles.buttonCalc, { width: '50%', minWidth: 200, backgroundColor: '#12131B' }]}
            >
              <Text style={styles.buttonTextCalc}>{button}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              key={button}
              onPress={() => handleInput(button)}
              style={[styles.buttonCalc, { backgroundColor: typeof (button) === 'number' ? '#3D0075' : '#12131B' }]}
            >
              <Text style={styles.buttonTextCalc}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  historyText: {
    color: '#FFF',
    marginRight: 15,
    fontSize: 18,
  },
  buttonTextCalc: {
    color: '#FFF',
    fontSize: 24,
  },
  actions: {
    flex: 1.9,
    backgroundColor: '#3D0075',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonCalc: {
    borderColor: '#1E1240',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    minHeight: 100,
    flex: 2
  },
  resultText: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginRight: 10,
    alignItems: 'flex-end',
  },
  resultContainer: {
    minHeight: 133,
    justifyContent: 'flex-end',
    backgroundColor: '#1E1240',
    alignItems: 'flex-end',
    width: '100%',
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#3D0075',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: '#12131B'
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '5%',
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
  },
  buttonText: {
    color: '#FFF',
  }
});