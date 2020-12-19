import React, { ReactText, useState, useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
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

interface TribunaisProps {
  nome: string;
  url: string;
}
const Home: React.FC = () => {
  const [uf, setUF] = useState<ReactText>('AC');
  const [tribunal, setTribunal] = useState<ReactText>(
    'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
  );
  const [tribunais, setTribunais] = useState<TribunaisProps[]>(
    [] as TribunaisProps[],
  );
  const navigation = useNavigation();

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

  const acre = [
    {
      nome: 'Justiça Eleitoral',
      url:
        'https://www.tse.jus.br/servicos-judiciais/processos/processo-judicial-eletronico/processo-judicial-eletronico-1',
    },
    {
      nome: 'TRF 1ª Região - 1º grau',
      url: 'https://pje1g.trf1.jus.br/pje/login.seam',
    },
    {
      nome: 'TRF 1ª Região - 2º grau',
      url: 'https://pje2g.trf1.jus.br/pje/login.seam',
    },
    {
      nome: 'TRT 14 - 1º grau',
      url: 'https://pje.trt14.jus.br/primeirograu/login.seam',
    },
    {
      nome: 'TRT 14 - 2º grau',
      url: 'https://pje.trt14.jus.br/segundograu/login.seam',
    },
  ];

  useEffect(() => {
    console.log(uf);
    console.log(tribunal);
    setTribunais(acre);
  }, [uf, tribunal]);

  return (
    <Container>
      <ImageBG source={bg} resizeMode="cover">
        <Logo source={img} />
        <Text>Seleciona uma opção</Text>
        <Text>UF:</Text>
        <PickerArea>
          <PickerCustom
            selectedValue={uf}
            onValueChange={(itemValue, itemIndex) => {
              setUF(itemValue);
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
            selectedValue={tribunal}
            onValueChange={(itemValue, itemIndex) => {
              setTribunal(itemValue);
            }}
            mode="dropdown"
          >
            {tribunais.map(value => (
              <PickerCustom.Item
                key={value.nome}
                label={value.nome}
                value={value.url}
              />
            ))}
          </PickerCustom>
        </PickerArea>

        <Buttom
          onPress={() => navigation.navigate('Webview', { url: tribunal })}
        >
          <ButtomText>Ir para o site</ButtomText>
        </Buttom>
      </ImageBG>
    </Container>
  );
};

export default Home;
