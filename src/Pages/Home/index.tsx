import React, { ReactText, useState, useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import img from '../../Assets/Logox2.png';
import bg from '../../Assets/bg3.jpg';

import {
  acre,
  alagoas,
  amapa,
  amazonas,
  bahia,
  ceara,
  distrito_federal,
  espirito_santo,
  goiais,
  maranhao,
  mato_grosso,
  mato_grosso_do_sul,
  minas_gerais,
  para,
  paraiba,
  parana,
  pernambuco,
  piaui,
  rio_grande_do_norte,
  rio_grande_do_sul,
  rj,
  rondonia,
  roraima,
  santa_catarina,
  sergipe,
  sp,
  tocantins,
} from '../Util/estados';

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

  const handleSetTribunais = useCallback(() => {
    switch (uf) {
      case 'AC':
        setTribunais(acre);
        break;
      case 'AL':
        setTribunais(alagoas);
        break;
      case 'AM':
        setTribunais(amazonas);
        break;
      case 'AP':
        setTribunais(amapa);
        break;
      case 'BA':
        setTribunais(bahia);
        break;
      case 'CE':
        setTribunais(ceara);
        break;
      case 'DF':
        setTribunais(distrito_federal);
        break;
      case 'ES':
        setTribunais(espirito_santo);
        break;
      case 'GO':
        setTribunais(goiais);
        break;
      case 'MA':
        setTribunais(maranhao);
        break;
      case 'MT':
        setTribunais(mato_grosso);
        break;
      case 'MS':
        setTribunais(mato_grosso_do_sul);
        break;
      case 'MG':
        setTribunais(minas_gerais);
        break;
      case 'PA':
        setTribunais(para);
        break;
      case 'PB':
        setTribunais(paraiba);
        break;
      case 'PR':
        setTribunais(parana);
        break;
      case 'PE':
        setTribunais(pernambuco);
        break;
      case 'PI':
        setTribunais(piaui);
        break;
      case 'RJ':
        setTribunais(rj);
        break;
      case 'RN':
        setTribunais(rio_grande_do_norte);
        break;
      case 'RS':
        setTribunais(rio_grande_do_sul);
        break;
      case 'RO':
        setTribunais(rondonia);
        break;
      case 'RR':
        setTribunais(roraima);
        break;
      case 'SC':
        setTribunais(santa_catarina);
        break;
      case 'SP':
        setTribunais(sp);
        break;
      case 'SE':
        setTribunais(sergipe);
        break;
      case 'TO':
        setTribunais(tocantins);
        break;

      default:
        break;
    }
  }, [uf]);

  useEffect(() => {
    handleSetTribunais();
  }, [uf, handleSetTribunais]);

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
