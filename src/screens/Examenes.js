import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { InputText } from "../ui/Inputs/Inputs";
import TransactionAccordion from "../ui/TransactionAccordion";
import { appColorBg } from "../variables";

const Examenes = ({ navigation }) => {
  return (
    <ScrollView style={tw`${appColorBg} h-100%`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}
      >
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Examenes</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`my-4 flex-col gap-2 px-6 py-1 mb-22`}>
        <View style={tw`shadow-sm rounded overflow-hidden`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExamenDetail")}
            style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 shadow-sm shadow-blue-700`}
          >
            <View style={tw`flex-row gap-4 items-start`}>
              <IconMaterialCommunityIcons
                name="text-box-multiple-outline"
                size={24}
                style={tw`mt-1`}
                color={"gray"}
              />
              <View>
                <Text style={tw`font-semibold text-sm text-gray-900`}>
                  Examen de sangre
                </Text>
                <Text style={tw`text-sm text-gray-600`}>
                  Clinica Casanare
                </Text>
                <View style={tw`flex-row items-center gap-1 mt-1`}>
            {1 == 0 && <Text style={tw`text-sm text-green-500 bg-green-200 px-2 rounded-md font-bold`}>Rutinario</Text>}
              {1 == 1 && <Text style={tw`text-sm text-orange-500 bg-orange-200 px-2 rounded-md font-bold`}>En revisión</Text>}
              {1 == 2 && <Text style={tw`text-sm text-red-500 bg-red-200 px-2 rounded-md font-bold`}>Importante</Text>}
              {1 == 3 && <Text style={tw`text-sm text-white bg-slate-800 px-2 rounded-md font-bold`}>Obligatorio</Text>}
            </View>
              </View>
            </View>
            <Icon name={"chevron-right"} size={24} />
          </TouchableOpacity>
        </View>
        {/* <TransactionAccordion negocio="Tiendas ARA" puntos="-100" fecha="01/02/2023" motivo="Canjeo de puntos"/>
          <TransactionAccordion negocio="D1" puntos="100" fecha="01/02/2023" motivo="Compra realizada"/> */}
      </View>
    </ScrollView>
  );
};

export default Examenes;
