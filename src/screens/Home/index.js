import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Wrapper, Header } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name='qrcode-scan' size={30} color="#10c86e" />

        
      </Header>
    </Wrapper>
  );
}