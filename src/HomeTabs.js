import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen"
import Icon from 'react-native-vector-icons/Feather';
import Map from "./screens/Map"
import PerfilScreen from "./screens/PerfilScreen";
import Examenes from "./screens/Examenes";

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
    return(
            <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Inicio') {
                    iconName = focused ? 'home' : 'home';
                  }
                  if (route.name === 'Mapa') {
                    iconName = focused ? 'map' : 'map';
                  }
                  if (route.name === 'Perfil') {
                    iconName = focused ? 'user' : 'user';
                  }
                  if (route.name === 'Examenes') {
                    iconName = focused ? 'activity' : 'activity';
                  }
                  // Puedes personalizar el icono aquí según tus necesidades
                  return <Icon name={iconName} size={20} color={color} />;
                },
                tabBarIconStyle:{marginTop:6},
                tabBarLabelStyle:{paddingBottom:0, paddingTop:0, marginTop:0},
                tabBarStyle:{paddingBottom:10, paddingTop:0, height:60},
                tabBarActiveTintColor: '#15803d', // Color de la pestaña activa
                tabBarInactiveTintColor: 'gray', // Color de la pestaña inactiva
              })}
            >
                <Tab.Screen name="Inicio" options={{ title: 'Inicio', headerShown:false }} component={HomeScreen}/>
                <Tab.Screen name="Mapa" options={{ title: 'Mapa', headerShown:false }} component={Map}/>
                <Tab.Screen name="Examenes" options={{ title: 'Examenes', headerShown:false }} component={Examenes}/>
                <Tab.Screen name="Perfil" options={{ title: 'Perfil', headerShown:false }} component={PerfilScreen}/>
                {/* <Tab.Screen name="Empleo" options={{ title: 'Empleo' }} component={EmpleoScreen}/> */}
            </Tab.Navigator>
    )
}

export default HomeTabs