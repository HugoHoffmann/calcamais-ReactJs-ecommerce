import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis para corrida</strong>
        <span>R$ 150,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adiconar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis para corrida</strong>
        <span>R$ 150,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adiconar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis para corrida</strong>
        <span>R$ 150,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adiconar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis para corrida</strong>
        <span>R$ 150,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adiconar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" alt=""/>
        <strong>Tênis para corrida</strong>
        <span>R$ 150,00</span>
        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adiconar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
