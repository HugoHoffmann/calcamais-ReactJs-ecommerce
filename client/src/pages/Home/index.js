import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';

class Home extends Component{
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
  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);

  }
  render(){
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(product => (

          <li key={product.id}>
            <img 
              src={product.image} 
              alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>
            <button type="button" onClick={ () => this.handleAddProduct(product)} >
              <div>
                <MdAddShoppingCart size={16} color="#FFF"/> {amount[product.id] || 0}
              </div>
    
              <span>Adiconar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {} )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
