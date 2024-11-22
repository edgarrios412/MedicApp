import { View, Text, Image } from "react-native";
import tw from "twrnc";

const ProgressBar = ({ puntos, puntosMax }) => {
  return (
    <View style={tw`bg-white rounded-lg shadow-sm p-6 mb-6 w-full`}>
      <View style={tw`flex justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold`}>Próxima recompensa</Text>
        {/* <HelpCircle style={tw`text-gray-400`} size={20} /> */}
      </View>
      <View style={tw`flex-row justify-between mb-2`}>
        <View style={tw`flex-row items-center gap-1`}>
          <Image
            source={require("../../assets/moneda.png")}
            style={tw`w-4 h-4 rounded-full border-2 border-blue-500`}
          />
          <Text style={tw`text-sm text-blue-500 font-bold`}>{puntos}</Text>
        </View>
        {/* <Text style={tw`text-sm text-gray-500`}>2000 BioCash</Text> */}
      </View>
      <View style={tw`w-full bg-gray-200 rounded-full h-2.5`}>
        <View
          style={tw`${100*puntos/puntosMax >= 100 ? "bg-green-500" : "bg-blue-600"} h-2.5 rounded-full w-[${100*puntos/puntosMax > 100 ? 100 : 100*puntos/puntosMax}%]`}
          //   style={{ width: "22.5%" }}
        ></View>
      </View>
      <View style={tw`flex flex-row justify-between mt-1`}>
        <View style={tw`text-center`}>
          <Text style={tw`text-xl font-semibold ${100*puntos/puntosMax >= 100 ? "text-green-500" : "text-gray-400"}`}>
            0
          </Text>
          {/* <Text style={tw`text-xs text-gray-500`}>Bronce</Text> */}
        </View>
        <View style={tw`text-center`}>
          <Text style={tw`text-xl font-semibold ${100*puntos/puntosMax >= 100 ? "text-green-500" : "text-gray-400"}`}>
            {puntosMax}
          </Text>
          {/* <Text style={tw`text-xs text-gray-500`}>Recompensa</Text> */}
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
