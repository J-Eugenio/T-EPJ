import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  border-radius: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const ImageBG = styled.ImageBackground`
  flex: 1;

  align-items: center;
`;

export const PickerArea = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PickerCustom = styled(Picker)`
  background-color: transparent;
  width: 200px;
  height: 50px;
  color: #000;
`;

export const Buttom = styled.TouchableOpacity<ButtonProps>`
  margin-top: 20px;
  width: 150px;
  height: 50px;
  background-color: ${props => (props.disabled ? 'grey' : '#4630eb')};
  color: black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtomText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
