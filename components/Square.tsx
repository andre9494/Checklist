import { TouchableOpacity, View } from "react-native";
import styles from "../styles";
import TextField from "./TextField";

const Square = (props: {
  children: string | number;
  visible?: boolean;
  color: string;
}) => {
  const { children, visible, color } = props;

  return (
    <>
      {(visible == undefined || visible) && (
        <TouchableOpacity>
          <View
            style={{
              ...styles.square,
              backgroundColor: color,
            }}
          >
            <View style={styles.centeredContainer}>
              <TextField>{children}</TextField>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Square;
