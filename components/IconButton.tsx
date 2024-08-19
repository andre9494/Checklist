import { TouchableOpacity, View } from "react-native";
import { COLORS, Style } from "../styles";
import TextField from "./TextField";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = (props: {
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
export default IconButton;
