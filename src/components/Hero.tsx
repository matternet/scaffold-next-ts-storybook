import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';

const defaultProps = {
  title: 'with-chakra-ui',
};

type HeroProps = {
  title: string;
} & typeof defaultProps;

export const Hero = ({ title }: HeroProps) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = defaultProps;

export default Hero;
