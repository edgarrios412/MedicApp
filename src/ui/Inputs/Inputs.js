import { Button, StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from "react-native";
import { TextLabel } from "../Texts/Texts";
import { useEffect, useState } from "react";
import tw from "twrnc";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

export const InputSelect = ({ label, options, onValueChange, style }) => {
  return (
    <View style={tw`${style}`}>
      <TextLabel>{label}</TextLabel>
      <SelectList
        searchPlaceholder="Buscar"
        boxStyles={{
          borderColor:"rgb(229 231 235)",
        }}
        dropdownStyles={{
          borderColor:"rgb(229 231 235)",
        }}
        placeholder="Selecciona un tipo"
        setSelected={onValueChange}
        save="value"
        data={options}
      />
    </View>
  );
};

export const InputText = ({ label, onChangeText, style, name, placeholder, secure }) => {
  return (
    <View style={tw`${style}`}>
      <TextLabel>{label}</TextLabel>
      <TextInput
        secureTextEntry={secure}
        placeholder={placeholder}
        name={name}
        onChangeText={onChangeText}
        style={tw`border rounded-lg border-gray-200 w-100% h-10 px-5`}
      />
    </View>
  );
};

export const ImagePickerExample = ({setCargando, setPath}) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const prueba = await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri)
      uploadImage(result.assets[0].uri)
    }
  };


  const uploadImage = async (image) => {
    setCargando(true)
    const form = new FormData();
    form.append('file', {
      uri: image,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    try {
      const { data } = await axios.post('/documentos/null', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPath(data.path)
      setCargando(false)
      return;
    } catch (error) {
      setCargando(false)
      alert('Error uploading image:', error);
    }
  };

  return (
    <View style={tw`my-10`}>
      <Button title="Seleccionar una imagen" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={tw`w-100% h-[250px]`} />}
    </View>
  );
}