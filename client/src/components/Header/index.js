import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/images/logo.jpg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="calça mais" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>

      </Cart>
    </Container>
  );
}
