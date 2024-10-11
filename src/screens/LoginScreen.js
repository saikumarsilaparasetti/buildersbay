import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // Get the navigation object
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const handleLogin = () => {
    // Add your login logic here (e.g., API call)
    if (phone === '' || password === '') {
      Alert.alert('Error', 'Please fill all fields');
    } else {
      console.log("Making api call");
      // Make API call for post request
      fetch('http://192.168.253.212:6101/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Login successful:', data);
          // Handle successful login (e.g., store token, navigate to home screen)
          if (data.success) {
            // Import navigation from React Navigation
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: {
                token: data.data.token,
                user: data.data.user,
              },
            });
            // Navigate to the Home screen
            navigation.navigate('Home');
          } else {
            Alert.alert('Login Failed', data.message || 'Please check your credentials and try again.');
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          Alert.alert('Login Failed', 'Please check your credentials and try again.');
        });
      // Alert.alert('Login Successful', `Phone: ${phone}\nPassword: ${password}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuildersBay</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
