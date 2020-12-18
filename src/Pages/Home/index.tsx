import React, { ReactText, useState } from 'react';

import {
  Container,
  Text,
  Logo,
  ImageBG,
  PickerArea,
  PickerCustom,
  Buttom,
  ButtomText,
} from './styles';

import img from '../../Assets/logo2.png';
import bg from '../../Assets/bg3.jpg';

const Home: React.FC = () => {
  const [service, setService] = useState<ReactText>('AC');

  const estados = [
    {
      label: 'AC',
      value: 'Acre',
    },
    {
      label: 'AL',
      value: 'Alagoas',
    },
    {
      label: 'AM',
      value: 'Amazonas',
    },
    {
      label: 'AP',
      value: 'Amapá',
    },
    {
      label: 'BA',
      value: 'Bahia',
    },
    {
      label: 'CE',
      value: 'Ceará',
    },
    {
      label: 'DF',
      value: 'Distrito Federal',
    },
    {
      label: 'ES',
      value: 'Espírito Santo',
    },
    {
      label: 'GO',
      value: 'Goiás',
    },
    {
      label: 'MA',
      value: 'Maranhão',
    },
    {
      label: 'MT',
      value: 'Mato Grosso',
    },
    {
      label: 'MS',
      value: 'Mato Grosso do Sul',
    },
    {
      label: 'MG',
      value: 'Minas Gerais',
    },
    {
      label: 'PA',
      value: 'Pará',
    },
    {
      label: 'PB',
      value: 'Paraíba',
    },
    {
      label: 'PR',
      value: 'Paraná',
    },
    {
      label: 'PE',
      value: 'Pernambuco',
    },
    {
      label: 'PI',
      value: 'Piauí',
    },
    {
      label: 'RJ',
      value: 'Rio de Janeiro',
    },
    {
      label: 'RN',
      value: 'Rio Grande do Norte',
    },
    {
      label: 'RS',
      value: 'Rio Grande do Sul',
    },
    {
      label: 'RO',
      value: 'Rondônia',
    },
    {
      label: 'RR',
      value: 'Roraima',
    },
    {
      label: 'SC',
      value: 'Santa Catarina',
    },
    {
      label: 'SP',
      value: 'São Paulo',
    },
    {
      label: 'SE',
      value: 'Sergipe',
    },
    {
      label: 'TO',
      value: 'Tocantins',
    },
  ];

  return (
    <Container>
      <ImageBG source={bg} resizeMode="cover">
        <Logo source={img} />
        <Text>Seleciona uma opção</Text>
        <Text>UF:</Text>
        <PickerArea>
          <PickerCustom
            selectedValue={service}
            onValueChange={(itemValue, itemIndex) => {
              setService(itemValue);
            }}
            mode="dropdown"
          >
            {estados.map(value => (
              <PickerCustom.Item
                key={value.label}
                label={value.value}
                value={value.label}
              />
            ))}
          </PickerCustom>
        </PickerArea>
        <Text>Tribunal:</Text>
        <PickerArea>
          <PickerCustom
            selectedValue={service}
            onValueChange={(itemValue, itemIndex) => {
              setService(itemValue);
            }}
            mode="dropdown"
          >
            {estados.map(value => (
              <PickerCustom.Item
                key={value.label}
                label="Justiça Eleitoral"
                value={value.label}
              />
            ))}
          </PickerCustom>
        </PickerArea>

        <Buttom onPress={() => console.log(service)}>
          <ButtomText>Ir para o site</ButtomText>
        </Buttom>
      </ImageBG>
    </Container>
  );
};

export default Home;
