import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import tw from "twrnc";
  import Icon from "react-native-vector-icons/Feather";
  import IconMaterialIcons from "react-native-vector-icons/Foundation";
  import { InputText } from "../ui/Inputs/Inputs";
  
  const styles = {
    app: {
      flex: 4, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: 400
    },
    item: {
      flex: 1,
      maxWidth: "50%", // 100% devided by the number of rows you want
      alignItems: "center",
      
      // my visual styles; not important for the grid
      padding: 10,
      backgroundColor: "#fff",
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  };

  const ItemEmpty = ({navigation}) => {
    return <TouchableOpacity onPress={() => navigation.navigate("CreateNegocio")} style={tw`border-2 border-dashed gap-2 border-gray-300 justify-center max-w-42 w-1/2 h-36 items-center p-10 rounded-md mx-8`}>
        <IconMaterialIcons name="torso-business" color={"#9ca3af"} size={24}/>
        <Text style={tw`text-gray-400 text-center`}>Crear nuevo negocio</Text>
    </TouchableOpacity>;
  };

  const MisNegocios = ({ navigation }) => {

    const Item = ({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate("AdminNegocio")} style={tw`flex-1 max-w-1/2 w-1/2 items-center p-6 bg-white rounded-md shadow-md m-2`}>
            <Image
              source={require("../../assets/negocios/ara.jpg")}
              style={tw`h-14 w-14 rounded-full`}
            />
            <Text style={tw`font-bold text-base mt-2 text-center`}>Tiendas ARA</Text>
        </TouchableOpacity>;
      };

    return (
      <View style={tw`bg-[#f2f5ff] h-100%`}>
        <View style={tw`flex-row items-center justify-between px-6 py-3 bg-white shadow-sm`}>
          <TouchableOpacity
            style={tw`px-1 py-2`}
            onPress={() => navigation.goBack()}
          >
            <Icon name={"arrow-left"} size={24} />
          </TouchableOpacity>
          <Text style={tw`font-semibold text-base text-[#222B45]`}>
            Mis negocios
          </Text>
          <View style={tw`flex-row gap-4`}>
            <TouchableOpacity>
              <Icon name={"more-vertical"} color={"white"} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`my-4 flex-row gap-2 px-6 py-0`}>
        <FlatList
        data={itemData}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
      </View>
      <ItemEmpty navigation={navigation}/>
      </View>
    );
  };

  const itemData = [
    {
        icon: (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
            }}
          />
        )
      },
      {
        icon: (
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
            }}
          />
        )
      }
  ];
  
  export default MisNegocios;
  