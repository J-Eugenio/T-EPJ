import React from 'react';
import { View } from 'react-native';
import { WebView as WV } from 'react-native-webview';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Container, GoBack, BtnText } from './styles';

type ParamList = {
  Props: {
    url: string;
  };
};
export default function Webview(){
  const { params } = useRoute<RouteProp<ParamList, 'Props'>>();
  const { url } = params;

  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <WV
          source={{
            uri: url,
          }}
          style={{ marginTop: 20 }}
        />
      </View>
      <GoBack onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" size={24} color="white" />
        <BtnText>Voltar</BtnText>
      </GoBack>
    </Container>
  );
};

