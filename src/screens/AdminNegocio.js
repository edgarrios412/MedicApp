import {
  Image,
  Modal,
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
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { InputText } from "../ui/Inputs/Inputs";
import ProgressBar from "../ui/ProgressBar";
import { useState } from "react";

const AdminNegocio = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={tw`bg-[#f2f5ff] h-100%`}>
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
            {/* <Image
              source={require("../../assets/gift.png")}
              style={tw`w-26 h-26`}
            /> */}
            <Text style={tw`font-bold text-lg`}>Editar negocio</Text>
            <View style={tw`mt-4 mb-6`}>
              <Text style={tw`mb-1 text-sm`}>Nombre</Text>
              <View style={tw`gap-2`}>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                  placeholder="Las delicias"
                  value="Tiendas ARA"
                ></TextInput>
              </View>
            </View>
            <View style={tw`flex-row gap-3`}>
              <TouchableOpacity
                style={tw`bg-blue-200 px-5 py-2 rounded-xl`}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={tw`mx-auto text-blue-600 font-medium`}>
                  Confirmar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`px-5 py-2 rounded-xl`}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={tw`mx-auto text-gray-600 font-medium`}>Salir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={tw`bg-orange-500 w-full h-40 absolute`}></View>
      <View style={tw`flex-row items-center justify-between  px-6 py-4`}>
        <TouchableOpacity
          style={tw`px-1 py-2`}
          onPress={() => navigation.goBack()}
        >
          <IconFeather color={"white"} name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <IconFeather color={"#f97316"} name={"more-vertical"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex flex-row flex-wrap my-0 px-6`}>
        <View
          style={tw`flex justify-center items-center w-full rounded-lg overflow-hidden py-3 my-3`}
        >
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={tw`relative w-28 h-28 flex-1`}>
            <Image
              source={require("../../assets/negocios/ara.jpg")}
              style={tw`h-28 w-28 border-4 border-white rounded-full absolute`}
            />
            <View
              style={tw`absolute w-full h-full p-10 bg-black rounded-full opacity-70`}
            ></View>
            <IconMaterialCommunityIcons
              name="pencil"
              size={30}
              style={tw`absolute w-full h-full p-10 text-white`}
            />
          </TouchableOpacity>
          {/* <View style={tw`bg-transparent`}> */}
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={tw`mt-2 flex-row items-center justify-center gap-2`}
          >
            <Text style={tw`font-semibold text-xl text-black`}>
              Tiendas ARA
            </Text>
            <IconMaterialCommunityIcons name="pencil" size={16} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center justify-center gap-2`}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={tw`font-semibold text-sm mt-0 text-slate-700`}>
              Gastronomía
            </Text>
            <IconMaterialCommunityIcons
              name="pencil"
              size={14}
              style={tw`text-slate-700`}
            />
          </TouchableOpacity>
          {/* <Text
              style={tw`font-semibold items-center text-base mt-1 text-[#6B779A] flex flex-row`}
            >
              Dentista
            </Text> */}
          <View style={tw`flex flex-row flex-wrap mt-8 gap-4`}>
            <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
              style={tw`flex-row gap-1 justify-center items-center bg-blue-200 rounded-lg px-3 py-1`}
            >
              {/* <Icon style={tw`text-xl text-[#7ACEFA]`} name="users" /> */}
              <IconMaterialIcons
                style={tw`text-lg text-blue-600`}
                name="location-on"
              />
              <Text style={tw`font-extrabold text-blue-600 mt-0`}>
                Cambiar ubicación
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-row gap-1 justify-center items-center bg-red-200 rounded-lg px-3 py-1`}
            >
              {/* <Icon style={tw`text-xl text-[#7ACEFA]`} name="users" /> */}
              <IconMaterialIcons
                style={tw`text-lg text-red-600`}
                name="report"
              />
              <Text style={tw`font-extrabold text-red-500 mt-0`}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AdminClientes")}
          style={tw`bg-blue-200 rounded-lg shadow-sm px-6 py-3 mb-6 w-full`}
        >
          <View style={tw`flex-row items-center gap-4`}>
            <IconFeather name="users" size={20} color={"#2563eb"} />
            <Text style={tw`text-base font-bold text-blue-500`}>
              Administrar clientes
            </Text>
          </View>
          <Text style={tw`my-1 text-blue-500`}>
            Obtén información detallada de tus clientes de forma rápida
          </Text>
        </TouchableOpacity>
        {/* <ProgressBar puntos={10} puntosMax={200} /> */}
        <View style={tw`bg-white rounded-lg shadow-sm p-6 mb-6 w-full`}>
          <Text style={tw`font-bold text-lg text-[#222B45] mb-1`}>
            Obten puntos
          </Text>
          <Text style={tw`text-gray-500 mb-1`}>
            Puedes obtener puntos de las siguientes maneras, puede variar en
            cada negocio
          </Text>
          <View style={tw`flex-col gap-4 my-4`}>
            <View style={tw`flex-row gap-0 items-center`}>
              <Icon style={tw`text-lg px-4 text-[#E8899E]`} name="message" />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Comprando</Text>
                <Text style={tw`text-sm text-[#6B779A]`}>
                  Por cada $1.000 recibe 1 punto
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-0 items-center`}>
              <IconFeather
                style={tw`text-lg px-4 text-[#7ACEFA]`}
                name="phone-call"
              />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Sorteos</Text>
                <Text style={tw`text-sm text-[#6B779A]`}>
                  Este negocio puede sortear puntos
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-0 items-center`}>
              <IconFeather
                style={tw`text-lg px-4 text-[#F7C480]`}
                name="video"
              />
              <View>
                <Text style={tw`text-[#222B45] font-bold`}>Otro metodo</Text>
                <Text style={tw`text-sm text-[#6B779A]`}>
                  Texto de ejemplo para otro metodo
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={tw`bg-blue-200 px-5 py-3 rounded-md mt-2`}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={tw`mx-auto text-blue-600 font-medium`}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`font-bold text-lg text-[#222B45] mb-1`}>
          Redime tus puntos
        </Text>
        <View style={tw`rounded-lg mb-6 w-full`}>
          {/* <Text style={tw`text-gray-500 mb-1`}>A continuación verás una lista de articulos o descuentos que puedes obtener con tus puntos acumulados</Text> */}
          <View style={tw`flex-col gap-3 my-4`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditarProducto")}
              style={tw`bg-white flex-row rounded-lg shadow-sm px-2 py-4 w-full gap-4 items-center`}
            >
              <View style={tw`w-20 h-20`}>
                <Image
                  source={require("../../assets/product.jpg")}
                  resizeMode="contain"
                  style={tw`w-full h-full`}
                />
              </View>
              <View>
                <Text style={tw`text-[#222B45] font-bold mb-0`}>
                  Iphone XR 256GB
                </Text>
                <View style={tw`flex-row items-center gap-1`}>
                  <Image
                    source={require("../../assets/moneda.png")}
                    style={tw`w-4 h-4`}
                  />
                  <Text style={tw`text-sm text-blue-500 font-bold`}>236</Text>
                </View>
                <Text style={tw`text-slate-600 mt-0`}>Valor</Text>
                <Text style={tw`font-bold`}>$ 199.999</Text>
              </View>
              <IconMaterialCommunityIcons
              name="pencil"
              size={20}
              style={tw`text-slate-700 right-10 absolute`}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditarProducto")}
              style={tw`bg-white flex-row rounded-lg shadow-sm px-2 py-4 w-full gap-4 items-center`}
            >
              <View style={tw`w-20 h-20`}>
                <Image
                  source={require("../../assets/product2.jpg")}
                  resizeMode="contain"
                  style={tw`w-full h-full`}
                />
              </View>
              <View>
                <Text style={tw`text-[#222B45] font-bold mb-0`}>
                  Iphone XR 256GB
                </Text>
                <View style={tw`flex-row items-center gap-1`}>
                  <Image
                    source={require("../../assets/moneda.png")}
                    style={tw`w-4 h-4`}
                  />
                  <Text style={tw`text-sm text-blue-500 font-bold`}>236</Text>
                </View>
                <Text style={tw`text-slate-600 mt-0`}>Valor</Text>
                <Text style={tw`font-bold`}>$ 199.999</Text>
              </View>
              <IconMaterialCommunityIcons
              name="pencil"
              size={20}
              style={tw`text-slate-700 right-10 absolute`}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("NuevoProducto")}
              style={tw`border-2 border-dashed border-gray-300 w-full h-26 rounded-lg my-2 justify-center`}
            >
              <View style={tw`px-6 z-30 flex-col items-center gap-2`}>
                <IconIonicons
                  name="add-circle-outline"
                  size={28}
                  color={"gray"}
                />
                <Text style={tw`text-gray-400 text-center`}>
                  Agregar un nuevo producto canjeable
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <TouchableOpacity
          onPress={() => navigation.navigate("AgendarCita")}
          style={tw`bg-blue-600 mb-6 mx-6 h-14 rounded-xl flex`}
        >
          <Text style={tw`m-auto font-semibold text-white text-lg`}>
            Agendar una cita
          </Text>
        </TouchableOpacity> */}
    </ScrollView>
  );
};

export default AdminNegocio;
