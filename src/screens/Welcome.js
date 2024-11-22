import { useContext, useEffect } from "react";
import { Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc"
import { UserContext } from "../context/UserContext";

const Welcome = ({ navigation }) => {

  const {user, setUser} = useContext(UserContext)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("visto");
      const token = await AsyncStorage.getItem("token");
      const userSaved = await AsyncStorage.getItem("user");
      if (value !== null) {
        // value previously stored
        // navigation.navigate("Onboarding");
        if(token !== null && userSaved !== null){
          navigation.navigate("Home");
          setUser(JSON.parse(userSaved))
        }else{
          navigation.navigate("Login");
        }
      } else {
        navigation.navigate("Onboarding");
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center w-full h-full`}>
      <Image source={require("../../assets/name.png")} style={tw`h-10 w-56`} />
    </View>
  );
};

export default Welcome;
