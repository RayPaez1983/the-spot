import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  console.log(showPassword);
  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>My Name is: {text}</Text>

      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry={showPassword}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Button
        title={showPassword ? 'show password' : 'hide password'}
        onPress={() => setShowPassword(!showPassword)}
      />
      {password.length < 5 ? (
        <Text>You password must have atleast 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
