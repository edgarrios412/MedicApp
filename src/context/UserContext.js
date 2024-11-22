import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token)
    axios.post("/user/verify", {token}).then(async ({data}) => {
      console.log(data)
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user)
    })
  }

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};