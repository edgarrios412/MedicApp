import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TransactionAccordion = ({recomendacion, nivelImportancia, reason}) => {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue(0);

  const toggleView = () => {
    height.value = withTiming(expanded ? 0 : 80, { duration: 300 }); // Cambia la altura según lo necesites
    setExpanded(!expanded);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: "hidden",
  }));

  return (
    <View style={tw`shadow-sm rounded overflow-hidden`}>
      <Pressable
        onPress={toggleView}
        style={tw`flex-row items-center justify-between gap-4 pr-2 bg-white px-4 py-3 shadow-sm shadow-blue-700`}
      >
        <View style={tw`flex-row gap-4 items-center`}>
          <IconMaterialCommunityIcons
            name="text-box-multiple-outline"
            size={24}
            color={"gray"}
          />
          <View>
            <Text style={tw`font-semibold text-sm text-gray-900`}>
              {recomendacion}
            </Text>
            <View style={tw`flex-row items-center gap-1 mt-1`}>
            {nivelImportancia == 0 && <Text style={tw`text-sm text-green-500 bg-green-200 px-2 rounded-md font-bold`}>Rutinario</Text>}
              {nivelImportancia == 1 && <Text style={tw`text-sm text-orange-500 bg-orange-200 px-2 rounded-md font-bold`}>Medio</Text>}
              {nivelImportancia == 2 && <Text style={tw`text-sm text-red-500 bg-red-200 px-2 rounded-md font-bold`}>Importante</Text>}
              {nivelImportancia == 3 && <Text style={tw`text-sm text-white bg-slate-800 px-2 rounded-md font-bold`}>Obligatorio</Text>}
            </View>
          </View>
        </View>
        <Icon name={"chevron-down"} size={24} />
      </Pressable>
      <Animated.View style={[animatedStyle, tw`bg-white p-0`]}>
        <View style={tw`px-4 mt-2 flex-col gap-1`}>
          <Text style={tw`text-slate-600`}>
            <Text style={tw`font-bold`}>Razón:</Text> {reason}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

export default TransactionAccordion