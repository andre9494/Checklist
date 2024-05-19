import { TouchableOpacity } from "react-native";
import { COLORS } from "../styles";
import TextField from "./TextField";

const Button = (props: { text: string; onClick: () => void }) => {
  const { text, onClick } = props;

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: COLORS.squareGreen,
        borderRadius: 5,
        borderColor: `${COLORS.squareGreen}`,
        borderWidth: 3,
      }}
      onPress={onClick}
    >
      <TextField>{text}</TextField>
    </TouchableOpacity>
  );
};
export default Button;
