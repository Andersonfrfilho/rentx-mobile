import { StatusBar } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import { Car } from '../../components/Car';

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail:
      'https://img1.gratispng.com/20180926/iqw/kisspng-2-18-audi-rs-5-car-audi-s5-audi-a5-audi-leasen-total-car-lease-5bac3bbe1e3f94.5714384315380141421239.jpg',
  };
  const carDataTwo = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail:
      'https://img1.gratispng.com/20180926/iqw/kisspng-2-18-audi-rs-5-car-audi-s5-audi-a5-audi-leasen-total-car-lease-5bac3bbe1e3f94.5714384315380141421239.jpg',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
      <Car data={carDataOne} />
    </Container>
  );
}
