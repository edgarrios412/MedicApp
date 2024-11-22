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
import Icon from "react-native-vector-icons/Octicons";
import { InputText } from "../ui/Inputs/Inputs";
import { useState } from "react";

const AdminClientes = ({ navigation }) => {
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
            <Text style={tw`font-bold text-lg`}>Administrar puntos</Text>
            <View style={tw`mt-4 mb-6`}>
            <View style={tw`flex-row items-center gap-1 mb-1`}>
                <Image
                  source={require("../../assets/moneda.png")}
                  style={tw`w-4 h-4`}
                />
                <Text style={tw`text-sm text-blue-500 font-bold`}>Puntos</Text>
              </View>
              <View style={tw`gap-2`}>
                <TextInput
                  style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3`}
                  placeholder="-100"
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
              <Text style={tw`mx-auto text-gray-600 font-medium`}>
                Salir
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
          Mis clientes
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"gear"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`my-4 flex-col gap-2 px-6 py-1`}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 rounded-lg shadow-md shadow-blue-700`}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <View
              style={tw`bg-blue-600 shadow-lg border-2 border-white h-10 w-10 rounded-lg flex items-center justify-center`}
            >
              <Text style={tw`mx-auto font-medium text-white text-base`}>
                E
              </Text>
            </View>
            <View>
              <Text style={tw`font-semibold text-base text-[#222B45]`}>
                Edgar Vilchez
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
          <Icon name={"gear"} size={20} color={"gray"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 rounded-lg shadow-md shadow-blue-700`}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <View
              style={tw`bg-blue-600 shadow-lg border-2 border-white h-10 w-10 rounded-lg flex items-center justify-center`}
            >
              <Text style={tw`mx-auto font-medium text-white text-base`}>
                Y
              </Text>
            </View>
            <View>
              <Text style={tw`font-semibold text-base text-[#222B45]`}>
                Yina Garzón
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
          <Icon name={"gear"} size={20} color={"gray"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("NuevoCliente")}
          style={tw`flex-row items-center justify-between gap-4 pr-2 bg-green-200 px-4 py-3 rounded-lg shadow-md shadow-blue-700`}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <View
              style={tw`bg-green-700 shadow-lg border-2 border-white h-10 w-10 rounded-lg flex items-center justify-center`}
            >
              <Text style={tw`mx-auto font-medium text-white text-base`}>
                <Icon name={"plus"} size={16} style={tw`text-white`} />
              </Text>
            </View>
            <View>
              <Text style={tw`font-semibold text-base text-green-800`}>
                Agregar cliente
              </Text>
              {/* <View style={tw`flex-row items-center gap-1`}>
                  <Image
                    source={require("../../assets/moneda.png")}
                    style={tw`w-4 h-4`}
                  />
                  <Text style={tw`text-sm text-blue-500 font-bold`}>1,435</Text>
                </View> */}
            </View>
          </View>
          <Icon name={"plus"} size={20} style={tw`text-green-800`} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AdminClientes;
