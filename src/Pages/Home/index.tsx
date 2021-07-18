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
  const [tribunal, setTribunal] = useState<ReactText>('null');
  const [tribunais, setTribunais] = useState<TribunaisProps[]>(
    [] as TribunaisProps[],
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

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
        setDisabledButton(true);
        break;
      case 'AL':
        setTribunais(alagoas);
        setDisabledButton(true);
        break;
      case 'AM':
        setDisabledButton(true);
        setTribunais(amazonas);
        break;
      case 'AP':
        setDisabledButton(true);
        setTribunais(amapa);
        break;
      case 'BA':
        setDisabledButton(true);
        setTribunais(bahia);
        break;
      case 'CE':
        setDisabledButton(true);
        setTribunais(ceara);
        break;
      case 'DF':
        setDisabledButton(true);
        setTribunais(distrito_federal);
        break;
      case 'ES':
        setDisabledButton(true);
        setTribunais(espirito_santo);
        break;
      case 'GO':
        setDisabledButton(true);
        setTribunais(goiais);
        break;
      case 'MA':
        setDisabledButton(true);
        setTribunais(maranhao);
        break;
      case 'MT':
        setDisabledButton(true);
        setTribunais(mato_grosso);
        break;
      case 'MS':
        setDisabledButton(true);
        setTribunais(mato_grosso_do_sul);
        break;
      case 'MG':
        setDisabledButton(true);
        setTribunais(minas_gerais);
        break;
      case 'PA':
        setDisabledButton(true);
        setTribunais(para);
        break;
      case 'PB':
        setDisabledButton(true);
        setTribunais(paraiba);
        break;
      case 'PR':
        setDisabledButton(true);
        setTribunais(parana);
        break;
      case 'PE':
        setDisabledButton(true);
        setTribunais(pernambuco);
        break;
      case 'PI':
        setDisabledButton(true);
        setTribunais(piaui);
        break;
      case 'RJ':
        setDisabledButton(true);
        setTribunais(rj);
        break;
      case 'RN':
        setDisabledButton(true);
        setTribunais(rio_grande_do_norte);
        break;
      case 'RS':
        setDisabledButton(true);
        setTribunais(rio_grande_do_sul);
        break;
      case 'RO':
        setDisabledButton(true);
        setTribunais(rondonia);
        break;
      case 'RR':
        setDisabledButton(true);
        setTribunais(roraima);
        break;
      case 'SC':
        setDisabledButton(true);
        setTribunais(santa_catarina);
        break;
      case 'SP':
        setDisabledButton(true);
        setTribunais(sp);
        break;
      case 'SE':
        setDisabledButton(true);
        setTribunais(sergipe);
        break;
      case 'TO':
        setDisabledButton(true);
        setTribunais(tocantins);
        break;

      default:
        break;
    }
  }, [uf]);

  useEffect(() => {
    if (tribunal === 'null') {
      setDisabledButton(true);
    }
  }, [tribunal]);

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
              setDisabledButton(false);
            }}
            mode="dropdown"
          >
            {tribunais.map((value, index) => (
              <PickerCustom.Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                label={value.nome}
                value={value.url}
              />
            ))}
          </PickerCustom>
        </PickerArea>

        <Buttom
          onPress={() => navigation.navigate('Webview', { url: tribunal })}
          disabled={disabledButton}
        >
          <ButtomText>Ir para o site</ButtomText>
        </Buttom>
      </ImageBG>
    </Container>
  );
};

export default Home;
