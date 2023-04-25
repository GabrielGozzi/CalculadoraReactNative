import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Função para atualizar os números
  const handleNumberPress = (num) => {
    if (result !== '') {
      setResult('');
    }

    if (num2 !== '') {
      setNum2(num2 + num.toString());
    } else {
      setNum1(num1 + num.toString());
    }
  };

  // Função para calcular a soma
  const handleSum = () => {
    if (num1 !== '' && num2 !== '') {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Resultado: ${sum}`);
    } else {
      setResult('Por favor, insira os números corretamente!');
    }
  };

  // Função para calcular a subtração
  const handleSubtraction = () => {
    if (num1 !== '' && num2 !== '') {
      const subtraction = parseFloat(num1) - parseFloat(num2);
      setResult(`Resultado: ${subtraction}`);
    } else {
      setResult('Por favor, insira os números corretamente!');
    }
  };

  // Função para calcular a multiplicação
  const handleMultiplication = () => {
    if (num1 !== '' && num2 !== '') {
      const multiplication = parseFloat(num1) * parseFloat(num2);
      setResult(`Resultado: ${multiplication}`);
    } else {
      setResult('Por favor, insira os números corretamente!');
    }
  };

  // Função para calcular a divisão
  const handleDivision = () => {
    if (num1 !== '' && num2 !== '') {
      const division = parseFloat(num1) / parseFloat(num2);
      setResult(`Resultado: ${division}`);
    } else {
      setResult('Por favor, insira os números corretamente!');
    }
  };

  // Função para calcular a potência ao quadrado
  const handlePowerSquare = () => {
    if (num1 !== '') {
      const powerSquare = parseFloat(num1) ** 2;
      setResult(`Resultado: ${powerSquare}`);
    } else {
      setResult('Por favor, insira o número corretamente!');
    }
  };

  // Função para calcular a potência ao cubo
  const handlePowerCube = () => {
    if (num1 !== '') {
      const powerCube = parseFloat(num1) ** 3;
      setResult(`Resultado: ${powerCube}`);
    } else {
      setResult('Por favor, insira o número corretamente!');
    }
  };

  // Função para calcular a potência com base em "xy"
  const handlePowerXY = () => {
    if (num1 !== '' && num2 !== '') {
      const powerXY = parseFloat(num1) ** parseFloat(num2);
      setResult(`Resultado: ${powerXY}`);
    } else {
      setResult('Por favor, insira os números corretamente!');
    }
  };

  // Função para limpar os campos
  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(num) => setNum1(num)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(num) => setNum2(num)}
        value={num2}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        {/* Adicione os botões restantes de 2 a 9 aqui */}
        <TouchableOpacity style={styles.button} onPress={() => handleSum()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSubtraction()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleMultiplication()}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDivision()}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePowerSquare()}>
          <Text style={styles.buttonText}>x^2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePowerCube()}>
          <Text style={styles.buttonText}>x^3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePowerXY()}>
          <Text style={styles.buttonText}>x^y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={() => handleClear()}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '25%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    margin: 5,
    backgroundColor: '#FFFFFF',
  },
  clearButton: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    margin: 5,
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 24,
    color: '#333333',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    color: '#333333',
  },
});

export default App;