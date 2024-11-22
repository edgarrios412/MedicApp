import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import { InputText } from "../ui/Inputs/Inputs";

const NegociosList = ({ navigation }) => {
  return (
    <ScrollView style={tw`bg-[#f2f5ff] h-100%`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
      >
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Negocios</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`my-4 flex-col gap-2 px-6 py-1`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detalle")}
          style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 rounded-lg shadow-md shadow-blue-700`}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <Image
              source={require("../../assets/negocios/ara.jpg")}
              style={tw`w-10 h-10 rounded-full`}
            />
            <View>
              <Text style={tw`font-semibold text-base text-[#222B45]`}>
                Tiendas Ara
              </Text>
              <View style={tw`flex-row items-center gap-1`}>
                <Image
                  source={require("../../assets/moneda.png")}
                  style={tw`w-4 h-4`}
                />
                <Text style={tw`text-sm text-blue-500 font-bold`}>1,435</Text>
              </View>
            </View>
          </View>
          <Icon name={"chevron-right"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detalle")}
          style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 rounded-lg shadow-md shadow-blue-700`}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <Image
              source={require("../../assets/negocios/d1.jpeg")}
              style={tw`w-10 h-10 rounded-full`}
            />
            <View>
              <Text style={tw`font-semibold text-base text-[#222B45]`}>D1</Text>
              <View style={tw`flex-row items-center gap-1`}>
                <Image
                  source={require("../../assets/moneda.png")}
                  style={tw`w-4 h-4`}
                />
                <Text style={tw`text-sm text-blue-500 font-bold`}>236</Text>
              </View>
            </View>
          </View>
          <Icon name={"chevron-right"} size={24} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NegociosList;
