import { Text } from "react-native";
import styles, { Style } from "../../styles";
import React from "react";

const TextField = (props: { children: string | string[] | number; style?: Style }) => {
  const { children, style } = props;

  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default TextField;
