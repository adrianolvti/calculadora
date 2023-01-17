import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export function Index({ handleClose }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleClose}>
        <Text style={styles.buttonText}>Fechar AvarageCalculator</Text>
      </TouchableOpacity>

        <Text style={styles.buttonText}>Em progresso!!!</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({




 

  container: {
    flex: 1,
    backgroundColor: '#12131B'
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
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
  }
});