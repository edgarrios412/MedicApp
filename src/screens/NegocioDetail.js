import {
  Image,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome6";
import IconFeather from "react-native-vector-icons/Feather";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { InputText } from "../ui/Inputs/Inputs";
import ProgressBar from "../ui/ProgressBar";
import { buttonColorBg, buttonColorText } from "../variables";

const NegocioDetail = ({ navigation, route }) => {
  const laboratorio = route.params || {};


  return (
    <ScrollView style={tw`bg-[#f2f5ff] h-100%`}>
      <View style={tw`bg-blue-500 w-full h-40 absolute`}></View>
      <View style={tw`flex-row items-center justify-between  px-6 py-4`}>
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <IconFeather color={"white"} name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <IconFeather color={"transparent"} name={"more-vertical"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex flex-row flex-wrap my-0 px-6`}>
        <View
          style={tw`flex justify-center items-center w-full rounded-lg overflow-hidden py-3 my-3`}
        >
          <Image
            source={require("../../assets/negocios/logo.jpg")}
            style={tw`h-28 w-28 border-4 border-white rounded-full`}
          />
          {/* <View style={tw`bg-transparent`}> */}
          <Text style={tw`font-semibold text-xl mt-2 text-black`}>
            {laboratorio.name}
          </Text>
          <Text style={tw`font-semibold text-sm mt-0 text-slate-600`}>
          {laboratorio.direction}
          </Text>
          <View style={tw`text-slate-600 flex-row gap-1 items-center`}>
            <IconFeather style={tw`text-slate-600`} name="phone" size={12}/>
            <Text style={tw`font-semibold text-sm mt-0 text-slate-600`}>{laboratorio.phone}</Text>
          </View>
          {/* <Text
            style={tw`font-semibold items-center text-base mt-1 text-[#6B779A] flex flex-row`}
          >
            Dentista
          </Text> */}
          <View style={tw`flex flex-row flex-wrap mt-8 gap-4`}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Map", {
                  ubicacion: {
                    latitude: laboratorio.lat,
                    longitude: laboratorio.lon,
                  },
                })
              }
              style={tw`flex-row gap-1 justify-center items-center ${buttonColorBg} rounded-lg px-3 py-1`}
            >
              {/* <Icon style={tw`text-xl text-[#7ACEFA]`} name="users" /> */}
              <IconMaterialIcons
                style={tw`text-lg ${buttonColorText}`}
                name="location-on"
              />
              <Text style={tw`font-extrabold ${buttonColorText} mt-0`}>
                Ver en mapa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('whatsapp://send?text=Quiero hacer un reporte&phone=573118268264').then(data => {
                console.log("WhatsApp Abierto");
              })
              .catch(() => {
                alert("Debes tener Whatsapp instalado en tu dispositivo");
              })}
              style={tw`flex-row gap-1 justify-center items-center bg-blue-200 rounded-lg px-3 py-1`}
            >
              {/* <Icon style={tw`text-xl text-[#7ACEFA]`} name="users" /> */}
              <IconMaterialIcons
                style={tw`text-lg text-blue-600`}
                name="history"
              />
              <Text style={tw`font-extrabold text-blue-500 mt-0`}>Mi historial</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`bg-white rounded-lg shadow-sm p-6 mb-6 w-full`}>
          <Text style={tw`font-bold text-lg text-[#222B45] mb-1`}>
            Tratamientos
          </Text>
          <Text style={tw`text-gray-500 mb-1`}>
            Estos son los tratamientos que realizamos en el centro médico
          </Text>
          <View style={tw`flex-col gap-4 my-4`}>
            <View style={tw`flex-row gap-0 items-center`}>
              <Icon style={tw`text-lg px-4 text-[#E8899E]`} name="message" />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Revisión preventiva</Text>
                {/* <Text style={tw`text-sm text-[#6B779A]`}>
                  Por cada $1.000 recibe 1 punto
                </Text> */}
              </View>
            </View>
            <View style={tw`flex-row gap-0 items-center`}>
              <IconFeather
                style={tw`text-lg px-4 text-[#7ACEFA]`}
                name="phone-call"
              />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Pruebas de sangre</Text>
                {/* <Text style={tw`text-sm text-[#6B779A]`}>
                  Este negocio puede sortear puntos
                </Text> */}
              </View>
            </View>
            <View style={tw`flex-row gap-0 items-center`}>
              <IconFeather
                style={tw`text-lg px-4 text-[#F7C480]`}
                name="video"
              />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Otro tratamiento</Text>
                {/* <Text style={tw`text-sm text-[#6B779A]`}>
                  Texto de ejemplo para otro metodo
                </Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AgendarCita", laboratorio)}
        style={tw`bg-green-600 mb-6 mx-6 h-14 rounded-xl flex`}
      >
        <Text style={tw`m-auto font-semibold text-white text-base`}>
          Agendar una cita
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NegocioDetail;
