import React from 'react';
import { Item } from './style';

const FooterItem = ({ url, name }) => (
  <Item>
    <a href={url}>{name}</a>
  </Item>
);

export default FooterItem;
