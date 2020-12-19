import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Container, GoBack, BtnText } from './styles';

type ParamList = {
  Props: {
    url: string;
  };
};
const Webview: React.FC = () => {
  const { params } = useRoute<RouteProp<ParamList, 'Props'>>();
  const { url } = params;

  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <WebView
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

export default Webview;
