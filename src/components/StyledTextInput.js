import React from "react";
import { TextInput } from "react-native";

const StyledTextInput = ({ style, error, ...props }) => {
  const inputStyle = [
    style,
  ]
  return <TextInput placeholder={props.placeholder} style={inputStyle} {...props} />
}
export default StyledTextInput