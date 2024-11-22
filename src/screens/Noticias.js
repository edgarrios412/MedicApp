import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import tw from "twrnc";
  import Icon from "react-native-vector-icons/FontAwesome6";
  import IconFeather from "react-native-vector-icons/Feather";
  import { InputText } from "../ui/Inputs/Inputs";
  
  const Noticias = ({ navigation }) => {
    return (
      <ScrollView style={tw`bg-white h-100%`}>
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
              <IconFeather color={"white"} name={"more-vertical"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`flex flex-row flex-wrap my-0 px-6`}>
          <View
            style={tw`flex justify-center items-center w-full rounded-lg overflow-hidden py-3 my-3`}
          >
            <Image
              source={require("../../assets/negocios/ara.jpg")}
              style={tw`h-28 w-28 border-4 border-white rounded-full`}
            />
            {/* <View style={tw`bg-transparent`}> */}
            <Text style={tw`font-semibold text-xl mt-2 text-[#222B45]`}>
              Tiendas ARA
            </Text>
            {/* <Text
              style={tw`font-semibold items-center text-base mt-1 text-[#6B779A] flex flex-row`}
            >
              Dentista
            </Text> */}
            <View style={tw`flex flex-row flex-wrap mt-8`}>
              <View style={tw`w-1/3 justify-center items-center`}>
                <Icon style={tw`text-xl text-[#7ACEFA]`} name="users" />
                <Text style={tw`font-extrabold text-[#222B45] mt-2`}>+1000</Text>
                <Text style={tw`text-[#6B779A] text-xs font-semibold`}>
                  Clientes
                </Text>
              </View>
              <View style={tw`w-1/3 justify-center items-center`}>
                <Icon style={tw`text-xl text-[#E8899E]`} name="medal" />
                <Text style={tw`font-extrabold text-[#222B45] mt-2`}>
                  10,9k
                </Text>
                <Text style={tw`text-[#6B779A] text-xs font-semibold`}>
                  Puntos
                </Text>
              </View>
              <View style={tw`w-1/3 justify-center items-center`}>
                <Icon style={tw`text-xl text-[#F7C480]`} name="star" />
                <Text style={tw`font-extrabold text-[#222B45] mt-2`}>4.3</Text>
                <Text style={tw`text-[#6B779A] text-xs font-semibold`}>
                  Estrellas
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`my-4 w-full`}>
            <Text style={tw`font-bold text-lg text-[#222B45] mb-2`}>
              Sobre el negocio
            </Text>
            <Text style={tw`text-sm text-[#6B779A]`}>
            Ara es la Tienda cercana con espíritu, ambiente y sabor colombiano, que ofrece productos de calidad a precios muy bajos. Abrió su primer local en Pereira en 2013. Sus marcas propias han sido desarrolladas bajo un modelo de cooperación, con foco en la industria colombiana. Tiendas ara apalanca la inversión y el empleo en las regiones donde tiene presencia.
            </Text>
          </View>
          <View style={tw`my-4 w-full`}>
            <Text style={tw`font-bold text-lg text-[#222B45] mb-2`}>
              Horarios de atención
            </Text>
            <Text style={tw`font-semibold text-sm text-[#6B779A]`}>
              Lun - Vie (7:00am - 4:00pm)
            </Text>
          </View>
          {/* <View style={tw`my-4 w-full`}>
            <Text style={tw`font-bold text-lg text-[#222B45] mb-2`}>
              Comunicación
            </Text>
            <View style={tw`flex-col gap-4 my-4`}>
              <View style={tw`flex-row gap-0 items-center`}>
                <Icon style={tw`text-lg px-4 text-[#E8899E]`} name="message" />
                <View>
                  <Text style={tw`text-[#222B45] font-bold`}>Mensajes</Text>
                  <Text style={tw`text-sm text-[#6B779A]`}>
                    Escribe y/o envía imágenes
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row gap-0 items-center`}>
                <IconFeather
                  style={tw`text-lg px-4 text-[#7ACEFA]`}
                  name="phone-call"
                />
                <View>
                  <Text style={tw`text-[#222B45] font-bold`}>Llamadas</Text>
                  <Text style={tw`text-sm text-[#6B779A]`}>
                    Habla directamente con el doctor
                  </Text>
                </View>
              </View>
              <View style={tw`flex-row gap-0 items-center`}>
                <IconFeather
                  style={tw`text-lg px-4 text-[#F7C480]`}
                  name="video"
                />
                <View>
                  <Text style={tw`text-[#222B45] font-bold`}>Videollamada</Text>
                  <Text style={tw`text-sm text-[#6B779A]`}>
                    Habla por videollamada con el doctor
                  </Text>
                </View>
              </View>
            </View>
          </View> */}
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
  
  export default Noticias;
  