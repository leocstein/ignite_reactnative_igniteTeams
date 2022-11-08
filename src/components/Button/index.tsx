import { TouchableOpacityProps } from "react-native";

import { Constainer, Title, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Constainer type={type} {...rest}>
      <Title>{title}</Title>
    </Constainer>
  );
}
