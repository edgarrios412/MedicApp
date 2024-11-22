import { TouchableOpacity } from "react-native"
import tw from "twrnc"

const Button = ({onPress, style, children, disabled}) => {
    return(
        <TouchableOpacity disabled={disabled} onPress={onPress} style={tw`rounded-lg px-4 py-2 ${style}`}>
            {children}
        </TouchableOpacity>
    )
}

export default Button 