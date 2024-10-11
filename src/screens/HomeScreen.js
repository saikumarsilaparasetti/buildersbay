// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    // <View>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    // </View>
    <View>
      {isAuthenticated ? (
        <Text>Welcome, {user.username}</Text>
      ) : (
        <Text>Please log in.</Text>
      )}
      <Text>Your token is: {token}</Text>
    </View>
  );
};

export default HomeScreen;
