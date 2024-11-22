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

const BusquedaScreen = ({ navigation }) => {
  return (
    <ScrollView style={tw`bg-white h-100% px-6 py-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>Doctores</Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row items-center gap-4 my-4`}>
        <Icon name="search" size={20} style={tw`text-[#979797]`} />
        <TextInput
          style={tw`bg-slate-100 w-[80%] py-1 px-3 rounded-xl`}
          placeholder="Buscar un doctor"
        />
        <TouchableOpacity onPress={() => alert("Filtrar la busqueda")}>
          <Icon name="filter" size={20} style={tw`text-[#979797]`} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row flex-wrap`}>
        <TouchableOpacity
          style={tw`flex justify-center items-center w-1/2 rounded-lg overflow-hidden py-1 my-1`}
          onPress={() => navigation.navigate("Detalle")}
        >
          <Image
            source={require("../../assets/icons/docTest.png")}
            style={tw`h-16 w-16`}
          />
          {/* <View style={tw`bg-transparent`}> */}
          <Text style={tw`font-semibold text-base mt-2 text-[#222B45]`}>
            Dr. Daniel Vilchez
          </Text>
          <Text
            style={tw`font-semibold text-sm items-center mb-0 text-[#6B779A] flex flex-row`}
          >
            Dentista
          </Text>
          <View style={tw`items-center mb-4 gap-1 flex flex-row`}>
            <Icon name="star" color={"orange"} />
            <Text style={tw`text-[#6B779A] text-sm`}>
              4.3 (20 reseñas)
            </Text>
          </View>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center w-1/2 rounded-lg overflow-hidden py-1 my-1`}
          onPress={() => navigation.navigate("Detalle")}
        >
          <View style={tw`relative`}>
            <Image
              source={require("../../assets/icons/docTest.png")}
              style={tw`h-16 w-16`}
            />
            <View
              style={tw`w-5 h-5 bg-blue-500 absolute rounded-full border-[3px] border-white inset-x-11 -inset-y-1`}
            ></View>
          </View>
          {/* <View style={tw`bg-transparent`}> */}
          <Text style={tw`font-semibold text-base mt-2 text-[#222B45]`}>
            Dr. Daniel Vilchez
          </Text>
          <Text
            style={tw`font-semibold items-center mb-0 text-[#6B779A] flex flex-row`}
          >
            Dentista
          </Text>
          <View style={tw`items-center mb-4 gap-1 flex flex-row`}>
            <Icon name="star" color={"orange"} />
            <Text style={tw`text-[#6B779A]`}>4.3 (20 reseñas)</Text>
          </View>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex justify-center items-center w-1/2 rounded-lg overflow-hidden py-1 my-1`}
          onPress={() => navigation.navigate("Detalle")}
        >
          <Image
            source={require("../../assets/icons/docTest.png")}
            style={tw`h-16 w-16`}
          />
          {/* <View style={tw`bg-transparent`}> */}
          <Text style={tw`font-semibold text-base mt-2 text-[#222B45]`}>
            Dr. Daniel Vilchez
          </Text>
          <Text
            style={tw`font-semibold items-center mb-0 text-[#6B779A] flex flex-row`}
          >
            Dentista
          </Text>
          <View style={tw`items-center mb-4 gap-1 flex flex-row`}>
            <Icon name="star" color={"orange"} />
            <Text style={tw`text-[#6B779A]`}>4.3 (20 reseñas)</Text>
          </View>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BusquedaScreen;
