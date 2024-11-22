import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import HomeTabs from './src/HomeTabs';
import NegocioDetail from './src/screens/NegocioDetail';
import AgendarCita from './src/screens/AgendarCita';
import NotificacionList from './src/screens/NotificacionList';
import NegociosList from './src/screens/NegociosList';
import TransactionList from './src/screens/TransaccionList';
import Noticias from './src/screens/Noticias';
import CanjearProducto from './src/screens/CanjearProducto';
import Onboarding from './src/screens/Onboarding';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RecoveryPassword from './src/screens/RecoveryPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import MisNegocios from './src/screens/MisNegocios';
import CreateNegocio from './src/screens/CreateNegocio';
import AdminNegocio from './src/screens/AdminNegocio';
import EditarPerfil from './src/screens/EditarPerfil';
import ChangePassword from './src/screens/ChangePassword';
import Map from './src/screens/Map';
import Toast from 'react-native-toast-message';
import AdminClientes from './src/screens/AdminClientes';
import NuevoCliente from './src/screens/NuevoCliente';
import Welcome from './src/screens/Welcome';
import NuevoProducto from './src/screens/NuevoProducto';
import EditarProducto from './src/screens/EditarProducto';
import ExamenDetail from './src/screens/ExamenDetail';
import SecureDownload from './src/screens/SecureDownload';
import DownloadResults from './src/screens/DownloadResults';
import { UserProvider } from './src/context/UserContext';
import EscanearCedula from './src/screens/EscanearCedula';

axios.defaults.baseURL = "https://medicappback.onrender.com";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <UserProvider>
    <NavigationContainer>
      <StatusBar style='' hidden/>
      <Stack.Navigator initialRouteName={"Welcome"}>
      {/* <Stack.Navigator initialRouteName={"TESTNOTIFICATION"}> */}
      <Stack.Screen options={{ headerShown:false }} name="EditarProducto" component={EditarProducto} />
      <Stack.Screen options={{ headerShown:false }} name="NuevoProducto" component={NuevoProducto} />
      <Stack.Screen options={{ headerShown:false }} name="Welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown:false }} name="NuevoCliente" component={NuevoCliente} />
      <Stack.Screen options={{ headerShown:false }} name="AdminClientes" component={AdminClientes} />
      <Stack.Screen options={{ headerShown:false }} name="ChangePassword" component={ChangePassword} />
      <Stack.Screen options={{ headerShown:false }} name="Map" component={Map} />
      <Stack.Screen options={{ headerShown:false }} name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen options={{ headerShown:false }} name="AdminNegocio" component={AdminNegocio} />
      <Stack.Screen options={{ headerShown:false }} name="CreateNegocio" component={CreateNegocio} />
      <Stack.Screen options={{ headerShown:false }} name="MisNegocios" component={MisNegocios} />
      <Stack.Screen options={{ headerShown:false }} name="RecoveryPassword" component={RecoveryPassword} />
      <Stack.Screen options={{ headerShown:false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown:false }} name="Register" component={RegisterScreen} />
      <Stack.Screen options={{ headerShown:false }} name="Onboarding" component={Onboarding} />
        <Stack.Screen options={{ headerShown:false }} name="Home" component={HomeTabs} />
        <Stack.Screen options={{ headerShown:false }} name="Detalle" component={NegocioDetail} />
        <Stack.Screen options={{ headerShown:false }} name="AgendarCita" component={AgendarCita} />
        <Stack.Screen options={{ headerShown:false }} name="ListChat" component={NotificacionList} />
        <Stack.Screen options={{ headerShown:false }} name="Negocios" component={NegociosList} />
        <Stack.Screen options={{ headerShown:false }} name="Noticias" component={Noticias} />
        <Stack.Screen options={{ headerShown:false }} name="Canjear" component={CanjearProducto} />
        <Stack.Screen options={{ headerShown:false }} name="TransactionList" component={TransactionList} />
        <Stack.Screen options={{ headerShown:false }} name="ExamenDetail" component={ExamenDetail} />

        {/* Descarga segura */}
        <Stack.Screen options={{ headerShown:false }} name="SecureDownload" component={SecureDownload} />
        <Stack.Screen options={{ headerShown:false }} name="DownloadResults" component={DownloadResults} />
        <Stack.Screen options={{ headerShown:false }} name="EscanearCedula" component={EscanearCedula} />
        {/* <Stack.Screen options={{ headerShown:false }} name="TESTNOTIFICATION" component={TESTNOTIFICATION} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
    <Toast />
    </>
  );
}
