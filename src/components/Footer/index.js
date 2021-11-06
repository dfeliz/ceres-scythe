import React from 'react';
import { FooterItem } from '../';
import { FooterContainer, LinkContainer } from './style';

const Footer = () => (
  <FooterContainer>
    <LinkContainer>
      <FooterItem
        name="LinkedIn"
        url="https://www.linkedin.com/in/daniel-feliz-2b1688159/"
      />
    </LinkContainer>
  </FooterContainer>
);

export default Footer;
