import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Home extends Component{
  state = {
    products: [],
  }

  async componentDidMount(){
    const response = await api.get('products');

    // formata o preço uma única vez e matém o 
    // restante dos produtos, apenas adicona uma nova propriedade
    const data = response.data.map(product => ({
      ...product, 
      priceFormated: formatPrice(product.price),
    }));
    this.setState({
      products: data,
    })

  }
  render(){
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (

          <li key={product.id}>
            <img 
              src={product.image} 
              alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>
            <button type="button" >
              <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
              </div>
    
              <span>Adiconar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}
