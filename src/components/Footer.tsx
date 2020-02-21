import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/core';

type FooterProps = FlexProps;

export const Footer = (props: FooterProps) => (
  <Flex as="footer" py="8rem" {...props} />
);

export default Footer;
