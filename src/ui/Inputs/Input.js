import { Text, TextInput, View } from "react-native"
import tw from "twrnc"
import { TextLabel } from "../Texts/Texts"

const Input = ({label, onChangeText, style,name}) => {
    return(
        <View style={tw`${style}`}>
        <TextLabel>{label}</TextLabel>
        <TextInput name={name} onChangeText={onChangeText} style={tw`border-2 rounded-lg border-gray-300 w-100% h-10 px-2`}/>
        </View>
    )
}

export default Input