import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const SignInScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [user_name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {isSignedIn, setIsSignedIn} = route.params;

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const onChangeHandler = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const onLoggedIn = async token => {
    try {
      const res = await axios.get(`http://10.0.2.2:5000/api/private`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = async () => {
    const payload = {
      email,
      user_name,
      password,
    };
    try {
      const res = await axios.post(
        `http://10.0.2.2:5000/api/${isLogin ? 'login' : 'signup'}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let token = res.data.token;
      if (token) {
        AsyncStorage.setItem('token', token);

        onLoggedIn(token);

        setIsError(false);
        setMessage(res.data.message);
        setIsSignedIn(true);
        navigation.navigate('Home', {
          email: email,
          user_name: user_name,
        });
      }
    } catch (err) {
      console.log('Co loi : ' + err);
      setIsError(true);
      setMessage(res.data.message);
    }
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };
  console.log(isLogin);
  useEffect(() => {
    navigation.setOptions({isSignedIn});
  }, [navigation, isSignedIn]);
  return (
    <ImageBackground
      source={require('../../assets/gradient-back.jpeg')}
      style={styles.image}>
      <View style={styles.card}>
        <Text style={styles.heading}>{isLogin ? 'Login' : 'Signup'}</Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            {!isLogin && (
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setName}
              />
            )}
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
            />
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
              {message ? getMessage() : null}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAlt}
              onPress={onChangeHandler}>
              <Text style={styles.buttonAltText}>
                {isLogin ? 'Sign Up' : 'Log In'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '80%',
    marginTop: '40%',
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: '30%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '5%',
    marginBottom: '30%',
    color: 'black',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: '80%',
    backgroundColor: 'black',
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonAlt: {
    width: '80%',
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonAltText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  message: {
    fontSize: 16,
    marginVertical: '5%',
  },
});

export default SignInScreen;
