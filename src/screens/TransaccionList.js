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
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { InputText } from "../ui/Inputs/Inputs";
import TransactionAccordion from "../ui/TransactionAccordion";
import { appColorBg } from "../variables";

const TransactionList = ({ navigation }) => {
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
        <Text style={tw`font-semibold text-base text-[#222B45]`}>
          Ultimas transacciones
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`my-4 flex-col gap-2 px-6 py-1 mb-22`}>
        <TransactionAccordion negocio="Tiendas ARA" puntos="-100" fecha="01/02/2023" motivo="Canjeo de puntos"/>
        <TransactionAccordion negocio="D1" puntos="100" fecha="01/02/2023" motivo="Compra realizada"/>
      </View>
    </ScrollView>
  );
};

export default TransactionList;
