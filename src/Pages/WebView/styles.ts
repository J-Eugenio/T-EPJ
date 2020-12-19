import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const GoBack = styled.TouchableOpacity`
  margin-top: 40px;
  margin-left: 10px;
  width: 100px;
  height: 40px;
  position: absolute;
  border-radius: 10px;
  background-color: #4630eb;
  border: 1px solid black;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
  flex-direction: row;
`;

export const BtnText = styled.Text`
  flex: 1;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
`;
