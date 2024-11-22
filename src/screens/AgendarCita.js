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
import SelectDropdown from "react-native-select-dropdown";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Toast from "react-native-toast-message";

const AgendarCita = ({ navigation, route }) => {
  const laboratorio = route.params || {};
  const {user, updateUser} = useContext(UserContext)

  const emojisWithIcons = [
    {title: 'Examen de sangre', icon: 'emoticon-happy-outline'},
    {title: 'Examen cancerígeno', icon: 'emoticon-cool-outline'},
  ];

  const newAppointment = () => {
    console.log(laboratorio)
    axios.post("/user/appointment", {laboratoryId:laboratorio.id, userId: user.id}).then(() => {
      Toast.show({
        type: 'success',
        text1: 'Cita agendada',
        text2: 'Has agendado tu cita de forma exitosa'
      });
      updateUser()
      navigation.navigate("Home")
    })
  }

  return (
    <ScrollView style={tw`bg-white h-100% px-6 py-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <TouchableOpacity style={tw`px-1 py-2`} onPress={() => navigation.goBack()}>
          <Icon name={"arrow-left"} size={24} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-base text-[#222B45]`}>
          Agendar una cita
        </Text>
        <View style={tw`flex-row gap-4`}>
          <TouchableOpacity>
            <Icon name={"more-vertical"} color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={tw`flex-row items-center gap-2 mt-4`}>
          <Text style={tw`font-bold text-base text-[#222B45]`}>
            Agosto, 2024
          </Text>
          <Icon style={tw`text-base`} name="arrow-down" />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={tw`my-4`}
        >
          <View
            style={tw`flex-col gap-2 items-center text-base mr-2 py-4 px-6 rounded-xl`}
          >
            <Text style={tw`text-xl text-[#6B779A] font-extrabold`}>13</Text>
            <Text style={tw`text-xs text-[#6B779A]`}>LUN</Text>
          </View>
          <View
            style={tw`flex-col gap-2 items-center text-base bg-green-500 mr-2 py-4 px-6 rounded-xl`}
          >
            <Text style={tw`text-xl text-white font-extrabold`}>14</Text>
            <Text style={tw`text-xs text-white`}>MAR</Text>
          </View>
          <View
            style={tw`flex-col gap-2 items-center text-base mr-2 py-4 px-6 rounded-xl`}
          >
            <Text style={tw`text-xl text-[#6B779A] font-extrabold`}>15</Text>
            <Text style={tw`text-xs text-[#6B779A]`}>MIE</Text>
          </View>
          <View
            style={tw`flex-col gap-2 items-center text-base mr-2 py-4 px-6 rounded-xl`}
          >
            <Text style={tw`text-xl text-[#6B779A] font-extrabold`}>16</Text>
            <Text style={tw`text-xs text-[#6B779A]`}>JUE</Text>
          </View>
          <View
            style={tw`flex-col gap-2 items-center text-base mr-2 py-4 px-6 rounded-xl`}
          >
            <Text style={tw`text-xl text-[#6B779A] font-extrabold`}>17</Text>
            <Text style={tw`text-xs text-[#6B779A]`}>VIE</Text>
          </View>
        </ScrollView>
        <Text style={tw`font-bold text-base mt-4 text-[#222B45]`}>
          Tiempo disponible
        </Text>
        <View style={tw`flex flex-row flex-wrap my-2`}>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              08:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2 bg-green-500`}
          >
            <Text style={tw`font-semibold text-xs text-white`}>09:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              10:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              11:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              12:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              01:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              02:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              03:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              04:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              05:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              06:00 PM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex justify-center items-center w-[22%] rounded-lg overflow-hidden py-2 mx-1 my-2`}
          >
            <Text style={tw`font-semibold text-xs text-[#6B779A]`}>
              07:00 PM
            </Text>
          </TouchableOpacity>
        </View>
        <View>
            <Text style={tw`mt-4 mb-1 text-sm`}>Procedimiento</Text>
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={tw`border-[1px] rounded-md border-gray-200 h-10 px-3 flex-row items-center justify-center`}>
                    {/* {selectedItem && (
                      <IconMaterialCommunityIcons
                        name={selectedItem.icon}
                        style={styles.dropdownButtonIconStyle}
                      />
                    )} */}
                    <Text style={(selectedItem ? tw`flex-1` : tw`text-gray-500 flex-1`)}>
                      {(selectedItem && selectedItem.title) ||
                        "Selecciona el procedimiento"}
                    </Text>
                    <IconMaterialCommunityIcons
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={tw`text-xl text-gray-400`}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={[tw`h-8 px-3 flex-row justify-center items-center`,{
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }]}
                  >
                    {/* <IconMaterialCommunityIcons
                      name={item.icon}
                      style={styles.dropdownItemIconStyle}
                    /> */}
                    <Text style={tw`flex-1`}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={tw`-mt-6 rounded-lg`}
            />
          </View>
          <TouchableOpacity
        onPress={newAppointment}
        style={tw`bg-green-600 my-10 h-14 rounded-xl flex`}
      >
        <Text style={tw`m-auto font-semibold text-white text-base`}>
          Agendar una cita
        </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AgendarCita;
