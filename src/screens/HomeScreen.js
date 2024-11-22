import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Linking,
  StatusBar,
} from "react-native";
import { ButtonLogin, ButtonLogout } from "../ui/Buttons/Buttons";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import TransactionAccordion from "../ui/TransactionAccordion";
import { appColorBg, buttonColorBg, buttonColorText } from "../variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../context/UserContext";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    console.log(user?.appointment);
    // Oculta la StatusBar cuando el modal está visible
    StatusBar.setHidden(true);
    // La muestra nuevamente cuando se cierra el modal
    return () => StatusBar.setHidden(true);
  }, [modalVisible]);

  useEffect(() => {
    console.log(user?.appointments);
  }, [user]);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-opacity-40 bg-black`}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 25,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Image
              source={require("../../assets/gift.png")}
              style={tw`w-26 h-26`}
            />
            <Text style={tw`font-bold text-lg`}>¿Que son los puntos?</Text>
            <Text style={tw`text-slate-600 my-5 max-w-70 text-left text-sm`}>
              Los puntos son acumulados por cada compra que realices en un
              comercio registrado en FidelizApp, que posteriormente puedes
              canjear por recompensas en cada comercio.
            </Text>
            <TouchableOpacity
              style={tw`bg-blue-200 px-5 py-2 rounded-xl w-full`}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={tw`mx-auto text-blue-600 font-medium`}>
                Entendido
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={tw`flex-row items-center justify-between px-6 py-1 bg-white shadow-sm`}
      >
        <View style={tw`flex-row gap-0`}>
          <TouchableOpacity style={tw`px-3 py-4 relative`}>
            <IconMaterialCommunityIcons
              name={"bell-outline"}
              color="transparent"
              size={24}
            />
          </TouchableOpacity>
        </View>
        {/* <Text style={tw`font-semibold text-lg text-[#222B45]`}>FidelizApp</Text> */}
        <Image source={require("../../assets/name.png")} style={tw`h-6 w-32`} />
        <View style={tw`flex-row gap-0`}>
          <TouchableOpacity
            style={tw`px-3 py-4 relative`}
            onPress={() => navigation.navigate("ListChat")}
          >
            <IconMaterialCommunityIcons
              name={"bell-outline"}
              style={tw`${buttonColorText}`}
              size={22}
            />
            {/* <View
              style={tw`w-3.5 h-3.5 bg-blue-500 absolute rounded-full border-[3px] border-white inset-x-7 inset-y-3`}
            ></View> */}
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={tw`px-3 py-4`}
            onPress={() => navigation.navigate("Calendario")}
          >
            <Icon name={"calendar"} size={24} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity> */}
        </View>
      </View>
      <ScrollView style={tw`${appColorBg} h-100%`}>
        <View style={tw`px-6 py-2`}>
          <View
            style={tw`flex-row justify-between items-center mt-4 mb-1 mr-4`}
          >
            <View style={tw`flex-row items-center gap-2`}>
              <View
                style={tw`bg-green-600 h-10 w-10 rounded-lg flex items-center justify-center`}
              >
                <Text style={tw`mx-auto font-medium text-white text-base`}>
                  {user?.name1[0]}
                </Text>
              </View>
              <View>
                <Text style={tw`text-gray-500 font-medium`}>
                  Buenas tardes,
                </Text>
                <Text style={tw`font-bold text-base`}>
                  {user?.name1 ?? "Anonimo"}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={updateUser} style={tw`w-10 h-10 flex items-center justify-center`}>
            <IconMaterialCommunityIcons color={"gray"} size={24} name="reload"/>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={tw`overflow-hidden w-full h-40 bg-[#3e88fb] rounded-xl my-2`}
            onPress={() => navigation.navigate("Noticias")}
          >
            <View style={tw`px-6 pt-4 z-30`}>
              <Text style={tw`text-white font-extrabold text-xl`}>
                Gana recompensas
              </Text>
              <Text style={tw`text-white font-normal text-xs max-w-2/3`}>
                Mientras compras tus productos favoritos
              </Text>
            </View>
            <Image
              source={require("../../assets/icon.png")}
              style={tw`mx-auto -mt-24 ml-46 w-50 h-50 z-20`}
            />
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={tw`border-2 border-dashed border-gray-300 w-full h-40 rounded-xl my-2 justify-center`}
          >
            <View style={tw`px-6 z-30 flex-col items-center gap-2`}>
              <IconMaterialCommunityIcons
                name="emoticon-sad-outline"
                size={28}
                color={"gray"}
              />
              <Text style={tw`text-gray-400 text-base text-center`}>
                Actualmente no hay promociones disponibles
              </Text>
            </View>
          </TouchableOpacity> */}
          <Text style={tw`font-bold ${buttonColorText} text-lg mt-3`}>
            Proximas citas
          </Text>
          <ScrollView
            horizontal={true}
            style={tw`gap-10`}
            showsHorizontalScrollIndicator={false}
          >
            {!user?.appointments?.length && (
              <TouchableOpacity
                style={tw`overflow-hidden mr-6 w-70 h-28 rounded-xl my-2 border-2 border-dashed border-gray-300`}
                onPress={() => navigation.navigate("Map")}
              >
                <View style={tw`px-6 pt-4 z-30`}>
                  <Text style={tw`text-gray-400 font-extrabold text-lg`}>
                    Agenda tu primer cita
                  </Text>
                  <Text style={tw`text-gray-400 font-normal text-xs`}>
                    En estos momentos no tienes citas agendadas
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {user?.appointments?.map((i) => (
              <TouchableOpacity
                key={i.id}
                style={tw`overflow-hidden mr-6 w-70 h-28 bg-green-600 rounded-xl my-2 shadow-sm`}
              >
                <View style={tw`px-6 pt-4 z-30`}>
                  <Text style={tw`text-white font-extrabold text-lg`}>
                    {i.date}
                  </Text>
                  <Text style={tw`text-slate-100 font-normal text-xs`}>
                    Tienes una cita agendada en {i?.laboratory?.name}
                  </Text>
                </View>
                {/* <Image
                source={require("../../assets/icon.png")}
                style={tw`mx-auto -mt-20 ml-36 w-40 h-40 z-20`}
              /> */}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-4 my-5`}
            onPress={() =>
              Linking.openURL(
                "whatsapp://send?text=Necesito ayuda en MedicApp&phone=573118268264"
              )
                .then((data) => {
                  console.log("WhatsApp Abierto");
                })
                .catch(() => {
                  alert("Debes tener Whatsapp instalado en tu dispositivo");
                })
            }
          >
            <View>
              <Text style={tw`font-bold text-[#23374D] text-base`}>
                ¿Necesitas ayuda?
              </Text>
              <Text style={tw`font-normal text-[#6B779A] text-sm`}>
                Ponte en contacto con nosotros
              </Text>
            </View>
            <Icon size={20} name="arrow-right" />
          </TouchableOpacity>
        </View>
        {/* <View style={tw`mt-0 flex-col gap-2 px-6 py-1 mb-22`}>
          <Text style={tw`font-bold ${buttonColorText} text-base mt-3`}>
            Recomendaciones
          </Text>
          <TransactionAccordion
            recomendacion="Examen de cáncer"
            nivelImportancia={2}
            reason="Tus antecedentes familiares han detectado un patrón y deberias descartar ese problema para futuro"
          />
          <TransactionAccordion
            recomendacion="Examen de próstata"
            nivelImportancia={1}
            reason="Tus antecedentes familiares han detectado un patrón y deberias descartar ese problema para futuro"
          />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
