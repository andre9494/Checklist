import { TouchableOpacity, View } from "react-native";
import { COLORS, Style } from "../../styles";
import TextField from "../TextField";
import Ionicons from "@expo/vector-icons/Ionicons";

const Button = (props: {
  text?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onClick: () => void;
  style?: Style;
  textColor?: string;
}) => {
  const { text, icon, onClick, style, textColor } = props;

  return (
    <TouchableOpacity
      style={{
        ...style,
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: COLORS.squareGreen,
        borderRadius: 5,
        borderColor: `${COLORS.squareGreen}`,
        borderWidth: 3,
      }}
      onPress={onClick}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={textColor ? textColor : COLORS.white}
          />
        )}
        {text && (
          <TextField style={{ color: textColor ? textColor : COLORS.white }}>
            {text}
          </TextField>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default Button;
