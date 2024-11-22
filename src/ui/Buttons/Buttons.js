import { Text } from "react-native"
import Button from "./Button"
import tw from "twrnc"

export const ButtonLogin = ({onPress, style, text, disabled=false}) => {
    return (
        <Button disabled={disabled} onPress={onPress} style={`bg-purple-400 ${style}`}>
            <Text style={tw`text-xl text-white font-semibold text-center`}>{text}</Text>
        </Button>
    )
}

export const ButtonLogout = ({onPress, style, text}) => {
    return (
        <Button onPress={onPress} style={`bg-red-500 ${style}`}>
            <Text style={tw`text-xl text-white font-semibold text-center`}>{text}</Text>
        </Button>
    )
}