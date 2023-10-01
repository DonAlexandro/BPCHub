import React from 'react';
import { Title, Text } from '../Typography';
import Styled from './header.styled';

export const Header = () => {
  return (
    <Styled.Header>
      <Title level={2}>ВП НУБіП БФК</Title>
      <Text $lead>БЕРЕЖАНСЬКИЙ ФАХОВИЙ КОЛЕДЖ</Text>
    </Styled.Header>
  );
};
