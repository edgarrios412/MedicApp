import { Text } from "react-native"
import tw from "twrnc"

export const TextTitle = ({children, style}) => {
    return <Text style={tw`font-bold text-2xl ${style}`}>{children}</Text>
}

export const TextSubtitle = ({children, style}) => {
    return <Text style={tw`${style}`}>{children}</Text>
}

export const TextLabel = ({children}) => {
    return <Text style={tw`font-bold text-lg`}>{children}</Text>
}

export const TextNegrita = () => {

}

export const TextGray = () => {

}