import React from 'react';
import { Container, Text, Logo, ImageBG } from './styles';

import img from '../../Assets/logo2.png';
import bg from '../../Assets/bg3.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <ImageBG source={bg} resizeMode="cover">
        <Logo source={img} />
        <Text>Seleciona uma opção</Text>
      </ImageBG>
    </Container>
  );
};

export default Home;
